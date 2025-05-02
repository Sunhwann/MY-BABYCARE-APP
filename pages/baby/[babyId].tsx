// BabyPage.tsx
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

export default function BabyPage() {
  const router = useRouter();
  const { babyId } = router.query;

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
  const [activeTab, setActiveTab] = useState<'input' | 'output'>('input');

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
    await fetchRecords();
  };

  const handleDelete = async (recordId: string) => {
    try {
      await deleteDoc(doc(db, "records", recordId));
      await fetchRecords();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
  };

  const handleEdit = async (recordId: string, newValue: string) => {
    try {
      const recordRef = doc(db, "records", recordId);
      await setDoc(recordRef, { value: Number(newValue) }, { merge: true });
      await fetchRecords();
    } catch (error) {
      console.error("Error editing record:", error);
    }
  };

  const getWeekDays = (date: Date) => {
    const start = startOfWeek(date, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  };

  const handleTabChange = (tab: 'input' | 'output') => {
    setActiveTab(tab);
  };

  const days = getWeekDays(weekStartDate);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = [0, 15, 30, 45];

  const getSummary = (day: Date) => {
    const dateStr = format(day, "yyyy-MM-dd");
    const dayRecords = records.filter((r) => r.date === dateStr);

    const milkTotal = dayRecords
      .filter((r) => r.type === "분유")
      .reduce((acc, r) => acc + Number(r.value || 0), 0);

    const breastTime = dayRecords
      .filter((r) => r.type === "모유")
      .reduce((acc, r) => acc + Number(r.value || 0), 0);

    const peeCount = dayRecords.filter((r) => r.type === "소변").length;
    const poopCount = dayRecords.filter((r) => r.type === "대변").length;

    return {
      milkTotal,
      breastTime,
      totalMilk: milkTotal + breastTime * 3,
      peeCount,
      poopCount,
    };
  };

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh", padding: "1rem" }}>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => handleTabChange('input')} style={{ backgroundColor: activeTab === 'input' ? '#0070f3' : '#f0f0f0', color: '#fff', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          📌 기록 입력
        </button>
        <button onClick={() => handleTabChange('output')} style={{ backgroundColor: activeTab === 'output' ? '#0070f3' : '#f0f0f0', color: '#fff', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
          📌 기록 출력
        </button>
      </div>

      {activeTab === 'input' && (
        <div>
          <h2>📌 기록 입력</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "8px", maxWidth: "600px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ minWidth: "80px", fontWeight: "bold" }}>📅 날짜</span>
              <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date!)} dateFormat="yyyy-MM-dd" locale={ko} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ minWidth: "80px", fontWeight: "bold" }}>⏰ 시간</span>
              <select value={selectedHour} onChange={(e) => setSelectedHour(Number(e.target.value))}>
                {hours.map((h) => <option key={h} value={h}>{String(h).padStart(2, "0")}시</option>)}
              </select>
              <select value={selectedMinute} onChange={(e) => setSelectedMinute(Number(e.target.value))}>
                {minutes.map((m) => <option key={m} value={m}>{String(m).padStart(2, "0")}분</option>)}
              </select>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ minWidth: "80px", fontWeight: "bold" }}>📄 종류</span>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                <option value="분유">🍼 분유</option>
                <option value="모유">🤱 모유</option>
                <option value="소변">💧 소변</option>
                <option value="대변">💩 대변</option>
              </select>
            </div>
            {(selectedType === "분유" || selectedType === "모유") && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ minWidth: "80px", fontWeight: "bold" }}>
                  {selectedType === "분유" ? "🍼 용량" : "⏱️ 시간"}
                </span>
                <input type="number" placeholder={selectedType === "분유" ? "ml" : "분"} value={amount} onChange={(e) => setAmount(e.target.value)} style={{ padding: "6px", width: "100px" }} />
              </div>
            )}
            <button onClick={handleSave} style={{ backgroundColor: "#28a745", color: "#fff", padding: "10px 20px", borderRadius: "8px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
              💾 저장
            </button>
          </div>
        </div>
      )}

      {activeTab === 'output' && (
        <div>
          <h2>📅 기록 출력</h2>
          <div style={{ marginBottom: "10px" }}>
            날짜 선택:{" "}
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date!)} dateFormat="yyyy-MM-dd" locale={ko} />
          </div>

          <div style={{ backgroundColor: "#f5f5f5", padding: "1rem", borderRadius: "8px" }}>
            <h3>📅 {format(selectedDate, "M/d (E)", { locale: ko })} 기록</h3>
            <ul>
              {records
                .filter((r) => r.date === format(selectedDate, "yyyy-MM-dd"))
                .sort((a, b) => (a.hour * 60 + a.minute) - (b.hour * 60 + b.minute))
                .map((record) => (
                  <li key={record.id}>
                    {String(record.hour).padStart(2, "0")}:{String(record.minute).padStart(2, "0")} /{" "}
                    {record.type === "분유" && `🍼 분유 / ${record.value}ml`}
                    {record.type === "모유" && `🤱 모유 / ${record.value}분`}
                    {record.type === "소변" && `💧 소변`}
                    {record.type === "대변" && `💩 대변`}
                    {["분유", "모유"].includes(record.type) && (
                      <>
                        {" "}
                        <button
                         className="text-blue-600 hover:underline cursor-pointer hover:scale-105 transition-transform duration-200"
                          onClick={() => {
                          const newValue = prompt("새 값 입력", String(record.value));
                          if (newValue !== null) handleEdit(record.id, newValue);
                        }}> 수정 </button>
                        <button 
                          className="text-red-600 hover:underline cursor-pointer hover:scale-105 transition-transform duration-200 ml-2"
                          onClick={() => handleDelete(record.id)}>삭제</button>
                      </>
                    )}
                  </li>
              ))}
            </ul>

            <hr />
            
            <h4>📊 주간 요약</h4>
            <ul>
              {days.map((day) => {
                const { milkTotal, breastTime, totalMilk, peeCount, poopCount } = getSummary(day);
                return (
                  <li key={format(day, "yyyy-MM-dd")}>
                    {format(day, "E", { locale: ko })}요일: 🍼 {milkTotal}ml + 🤱 {breastTime}분 = {totalMilk}ml / 💧 {peeCount}회 / 💩 {poopCount}회
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
