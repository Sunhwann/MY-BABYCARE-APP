import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../lib/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  deleteDoc,
  where,
} from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, startOfWeek, addDays } from "date-fns";
import { ko } from "date-fns/locale";
import { useTranslation } from "react-i18next";

export default function BabyPage() {
  const router = useRouter();
  const { babyId } = router.query;
  const { t, i18n } = useTranslation();

  const [babyData, setBabyData] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedHour, setSelectedHour] = useState<number>(12);
  const [selectedMinute, setSelectedMinute] = useState<number>(0);
  const [selectedType, setSelectedType] = useState<string>("분유");
  const [amount, setAmount] = useState<string>("");

  const [records, setRecords] = useState<any[]>([]);
  const [weekStartDate, setWeekStartDate] = useState<Date>(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );
  const [activeTab, setActiveTab] = useState<"input" | "output">("input");
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchBaby = async () => {
      if (!babyId) return;
      const docRef = doc(db, "babies", babyId as string);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBabyData(docSnap.data());
      }
    };
    fetchBaby();
  }, [babyId]);

  const fetchRecords = async () => {
    if (!babyId || !weekStartDate) return;
    const start = new Date(weekStartDate);
    const end = addDays(start, 6);
    const q = query(
      collection(db, "records"),
      where("babyId", "==", babyId),
      where("date", ">=", format(start, "yyyy-MM-dd")),
      where("date", "<=", format(end, "yyyy-MM-dd"))
    );
    const snapshot = await getDocs(q);
    const result: any[] = [];
    snapshot.forEach((doc) => result.push({ id: doc.id, ...doc.data() }));
    setRecords(result);
  };

  useEffect(() => {
    fetchRecords();
  }, [babyId, weekStartDate]);

  const handleSave = async () => {
    if (!babyId || !selectedDate || !selectedType) return;
    if ((selectedType === "분유" || selectedType === "모유") && !amount) return;

    const dateStr = format(selectedDate, "yyyy-MM-dd");
    const timeStr = `${String(selectedHour).padStart(2, "0")}:${String(selectedMinute).padStart(2, "0")}`;
    const recordId = `${babyId}-${dateStr}-${timeStr}-${selectedType}`;

    await setDoc(doc(db, "records", recordId), {
      babyId,
      date: dateStr,
      hour: selectedHour,
      minute: selectedMinute,
      type: selectedType,
      value: selectedType === "분유" || selectedType === "모유" ? Number(amount) : 1,
      timestamp: new Date(),
    });

    setAmount("");
    setSaveMessage(t("saved"));
    setTimeout(() => setSaveMessage(null), 3000);
    await fetchRecords();
  };

  const handleDelete = async (recordId: string) => {
    await deleteDoc(doc(db, "records", recordId));
    await fetchRecords();
  };

  const handleEdit = async (recordId: string, newValue: string) => {
    await setDoc(doc(db, "records", recordId), { value: Number(newValue) }, { merge: true });
    await fetchRecords();
  };

  const getWeekDays = (date: Date) =>
    Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(date, { weekStartsOn: 0 }), i));

  const handleTabChange = (tab: "input" | "output") => setActiveTab(tab);

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const days = getWeekDays(weekStartDate);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = [0, 15, 30, 45];

  const getSummary = (day: Date) => {
    const dateStr = format(day, "yyyy-MM-dd");
    const dayRecords = records.filter((r) => r.date === dateStr);

    const milkTotal = dayRecords.filter((r) => r.type === "분유").reduce((acc, r) => acc + Number(r.value || 0), 0);
    const breastTime = dayRecords.filter((r) => r.type === "모유").reduce((acc, r) => acc + Number(r.value || 0), 0);
    const peeCount = dayRecords.filter((r) => r.type === "소변").length;
    const poopCount = dayRecords.filter((r) => r.type === "대변").length;

    return { milkTotal, breastTime, totalMilk: milkTotal + breastTime * 3, peeCount, poopCount };
  };

  return (
    <div style={{ padding: "1rem", backgroundColor: "#fff", color: "#000", minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <button onClick={() => router.push("/")} style={{ fontWeight: "bold", color: "#333" }}>🏠 {t("home")}</button>
        <div>
          <button onClick={() => changeLanguage("ko")}>🇰🇷</button>
          <button onClick={() => changeLanguage("en")}>🇺🇸</button>
          <button onClick={() => changeLanguage("vi")}>🇻🇳</button>
        </div>
      </div>


      {babyData && (
  <div
    style={{
      marginBottom: "1rem",
      padding: "1rem",
      backgroundColor: "#e3f2fd",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    }}
  >
    <h3>👶 {t("babyInfo")}</h3>
    <p><strong>{t("name")}:</strong> {babyData.name}</p>
    <p><strong>{t("birthDate")}:</strong> {babyData.birthdate}</p>
  </div>
)}



      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => handleTabChange("input")} style={{ backgroundColor: activeTab === "input" ? "#0070f3" : "#ccc", color: "#fff", padding: "8px 16px", borderRadius: "6px" }}>
          📌 {t("inputRecord")}
        </button>
        <button onClick={() => handleTabChange("output")} style={{ backgroundColor: activeTab === "output" ? "#0070f3" : "#ccc", color: "#fff", padding: "8px 16px", borderRadius: "6px" }}>
          📌 {t("outputRecord")}
        </button>
      </div>

      {activeTab === "input" && (
  <div>
    <h2 className="text-xl font-semibold mb-4">📌 {t("inputRecord")}</h2>
    
    <div className="bg-gray-100 p-4 rounded-lg max-w-md space-y-4 shadow-md">
      
      {/* 날짜 선택 */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">{t("date")}</label>
        <DatePicker 
          selected={selectedDate} 
          onChange={(date) => setSelectedDate(date!)} 
          dateFormat="yyyy-MM-dd" 
          locale={ko} 
          className="border rounded p-2"
        />
      </div>

      {/* 시간 선택 */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">{t("time")}</label>
        <div className="flex gap-2">
          <select 
            value={selectedHour} 
            onChange={(e) => setSelectedHour(Number(e.target.value))} 
            className="border rounded p-2 w-1/2"
          >
            {hours.map((h) => (
              <option key={h} value={h}>{String(h).padStart(2, "0")}시</option>
            ))}
          </select>
          <select 
            value={selectedMinute} 
            onChange={(e) => setSelectedMinute(Number(e.target.value))} 
            className="border rounded p-2 w-1/2"
          >
            {minutes.map((m) => (
              <option key={m} value={m}>{String(m).padStart(2, "0")}분</option>
            ))}
          </select>
        </div>
      </div>

      {/* 타입 선택 */}
      <div className="flex flex-col">
        <label className="mb-1 font-medium">{t("type")}</label>
        <select 
          value={selectedType} 
          onChange={(e) => setSelectedType(e.target.value)} 
          className="border rounded p-2"
        >
          <option value="분유">🍼 {t("formulaMilk")}</option>
          <option value="모유">🤱 {t("breastMilk")}</option>
        </select>
      </div>

      {/* 수량 or 시간 입력 */}
      {(selectedType === "분유" || selectedType === "모유") && (
        <div className="flex flex-col">
          <label className="mb-1 font-medium">
            {selectedType === "분유" ? t("amountMl") : t("durationMin")}
          </label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            className="border rounded p-2"
            min="0"
          />
        </div>
      )}

      {/* 저장 버튼 */}
      <button 
        onClick={handleSave}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition duration-150"
      >
        💾 {t("save")}
      </button>

      {/* 저장 메시지 */}
      {saveMessage && <p className="text-green-600">{saveMessage}</p>}
    </div>
  </div>
)}


      {activeTab === "output" && (
        <div>
          <h2>📌 {t("outputRecord")}</h2>
          <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date!)} dateFormat="yyyy-MM-dd" locale={ko} />

          <ul className="mt-4 w-full overflow-x-auto">
  <li className="grid grid-cols-[1fr_2fr_auto] gap-2 bg-gray-200 p-2 rounded-t">
    <span className="font-medium">{t("time")}</span>
    <span className="font-medium">{t("detail")}</span>
    <span className="font-medium">{t("actions")}</span>
  </li>
  {records
    .filter((r) => r.date === format(selectedDate, "yyyy-MM-dd"))
    .sort((a, b) => a.hour * 60 + a.minute - (b.hour * 60 + b.minute))
    .map((record) => {
      const timeLabel = `${String(record.hour).padStart(2, "0")}:${String(record.minute).padStart(2, "0")}`;
      const valueLabel =
        record.type === "분유"
          ? `${record.value}ml`
          : record.type === "모유"
          ? `${record.value}분`
          : record.value;

      return (
        <li
          key={record.id}
          className="grid grid-cols-[1fr_2fr_auto] gap-2 items-center bg-white p-2 border-b last:border-none"
        >
          {/* 시간 컬럼 */}
          <span className="text-gray-700">{timeLabel}</span>

          {/* 종류 + 값 컬럼 */}
          <span className="flex items-center gap-2">
            {record.type === "분유" ? "🍼" : "🤱"}{" "}
            <strong className="text-indigo-600">{t(record.type === "분유" ? "formulaMilk" : "breastMilk")}</strong>{" "}
            — <span className="text-gray-800">{valueLabel}</span>
          </span>

          {/* 액션 버튼 컬럼 */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                const newValue = prompt(t("editPrompt"), String(record.value));
                if (newValue !== null) handleEdit(record.id, newValue);
              }}
              className="text-sm px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
            >
              ✏️ {t("edit")}
            </button>
            <button
              onClick={() => handleDelete(record.id)}
              className="text-sm px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition"
            >
              🗑️ {t("delete")}
            </button>
          </div>
        </li>
      );
    })}
</ul>
  

          <h3>📊 {t("weeklySummary")}</h3>
          <ul>
            {days.map((day) => {
              const { milkTotal, breastTime, totalMilk } = getSummary(day);
              return (
                <li key={format(day, "yyyy-MM-dd")}>
                  {format(day, "M/d (E)", { locale: ko })}: 🍼 {milkTotal}ml + 🤱 {breastTime}분 = {totalMilk}ml
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
