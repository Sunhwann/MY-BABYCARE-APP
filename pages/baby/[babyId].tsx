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
  const [selectedType, setSelectedType] = useState<string>("분유");
  const [amount, setAmount] = useState<string>("");

  const [records, setRecords] = useState<any[]>([]);
  const [weekStartDate, setWeekStartDate] = useState<Date>(
    startOfWeek(new Date(), { weekStartsOn: 0 })
  );

  // 아기 정보 가져오기
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

  // 주간 기록 가져오기
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
    snapshot.forEach((doc) => result.push(doc.data()));
    setRecords(result);
  };

  useEffect(() => {
    fetchRecords();
  }, [babyId, weekStartDate]);

  // 기록 저장
  const handleSave = async () => {
    if (!babyId || !selectedDate || !selectedType) return;
    if (selectedType === "분유" && !amount) return;

    const dateStr = format(selectedDate, "yyyy-MM-dd");
    const recordId = `${babyId}-${dateStr}-${selectedHour}-${selectedType}`;

    await setDoc(doc(db, "records", recordId), {
      babyId,
      date: dateStr,
      hour: selectedHour,
      type: selectedType,
      value: selectedType === "분유" ? Number(amount) : 1,
      timestamp: new Date(),
    });

    setAmount("");
    await fetchRecords(); // 기록 새로고침
  };

  const getWeekDays = (date: Date) => {
    const start = startOfWeek(date, { weekStartsOn: 0 });
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  };

  const days = getWeekDays(weekStartDate);
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
<div style={{ backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh", padding: "1rem" }}>


{/* 1. 상단: 아기 정보 + 마이페이지 버튼 */}
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
  <h1 style={{ margin: 0 }}>👶 {babyData?.name}</h1>
  <p style={{ margin: 0 }}>생일: {babyData?.birthdate}</p>
</div>

  <button
    onClick={() => router.push("/")}
    style={{
      backgroundColor: "#0070f3",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      padding: "8px 16px",
      cursor: "pointer",
      fontWeight: "bold",
      whiteSpace: "nowrap",
    }}
  >
    🏠 마이페이지
  </button>
</div>


     {/* 2. 중단: 기록 입력 */}
<h2>📌 기록 입력</h2>
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#f5f5f5",
    padding: "1rem",
    borderRadius: "8px",
    marginTop: "1rem",
    maxWidth: "600px",
  }}
>
  {/* 날짜 선택 */}
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span style={{ minWidth: "80px", fontWeight: "bold" }}>📅 날짜</span>
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date!)}
      dateFormat="yyyy-MM-dd"
      locale={ko}
    />
  </div>

  {/* 시간 선택 */}
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span style={{ minWidth: "80px", fontWeight: "bold" }}>⏰ 시간</span>
    <select
      value={selectedHour}
      onChange={(e) => setSelectedHour(Number(e.target.value))}
      style={{ padding: "6px" }}
    >
      {hours.map((h) => (
        <option key={h} value={h}>
          {String(h).padStart(2, "0")}:00
        </option>
      ))}
    </select>
  </div>

  {/* 기록 타입 선택 */}
  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <span style={{ minWidth: "80px", fontWeight: "bold" }}>📄 종류</span>
    <select
      value={selectedType}
      onChange={(e) => setSelectedType(e.target.value)}
      style={{ padding: "6px" }}
    >
      <option value="분유">🍼 분유</option>
      <option value="소변">💧 소변</option>
      <option value="대변">💩 대변</option>
    </select>
  </div>

  {/* 분유 용량 입력 (조건부) */}
  {selectedType === "분유" && (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ minWidth: "80px", fontWeight: "bold" }}>🍼 용량</span>
      <input
        type="number"
        placeholder="ml"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "6px", width: "100px" }}
      />
    </div>
  )}

  {/* 저장 버튼 */}
  <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
    <button
      onClick={handleSave}
      style={{
        backgroundColor: "#28a745",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "16px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      }}
    >
      💾 저장
    </button>
  </div>
</div>

     


      {/* 3. 하단: 주간 기록 출력 */}
      <h2 style={{ marginTop: "40px" }}>📅 주간 기록</h2>
      <div style={{ marginBottom: "10px" }}>
        주 시작일 선택:{" "}
        <DatePicker
          selected={weekStartDate}
          onChange={(date) => setWeekStartDate(date!)}
          dateFormat="yyyy-MM-dd"
          locale={ko}
        />
      </div>

      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem", backgroundColor: "#ffffff" }}>
  <thead>
    <tr>
      <th style={{ backgroundColor: "#333", color: "white", padding: "8px", border: "1px solid #ccc" }}></th>
      {days.map((day, i) => (
        <th
          key={i}
          colSpan={3}
          style={{
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            padding: "8px",
            border: "1px solid #ccc",
          }}
        >
          {format(day, "M/d (E)", { locale: ko })}
        </th>
      ))}
    </tr>
    <tr>
      <th style={{ backgroundColor: "#555", color: "white", padding: "6px", border: "1px solid #ccc" }}></th>
      {days.map((_, i) => (
        <React.Fragment key={i}>
          <th style={{ backgroundColor: "#888", color: "white", padding: "6px", border: "1px solid #ccc" }}>분유</th>
          <th style={{ backgroundColor: "#aaa", color: "black", padding: "6px", border: "1px solid #ccc" }}>소변</th>
          <th style={{ backgroundColor: "#ccc", color: "black", padding: "6px", border: "1px solid #ccc" }}>대변</th>
        </React.Fragment>
      ))}
    </tr>
  </thead>
  <tbody>
    {hours.map((hour, rowIndex) => (
      <tr
        key={hour}
        style={{
          backgroundColor: rowIndex % 2 === 0 ? "#f9f9f9" : "#ffffff",
        }}
      >
        <td
          style={{
            textAlign: "center",
            fontWeight: "bold",
            padding: "6px",
            backgroundColor: "#eee",
            border: "1px solid #ccc",
          }}
        >
          {String(hour).padStart(2, "0")}:00
        </td>
        {days.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          return (
            <React.Fragment key={dateStr}>
              {["분유", "소변", "대변"].map((type) => {
                const record = records.find(
                  (r) => r.date === dateStr && r.hour === hour && r.type === type
                );
                const value = record?.value;
                return (
                  <td
                    key={type}
                    style={{
                      textAlign: "center",
                      fontWeight: "500",
                      padding: "6px",
                      backgroundColor:
                        type === "분유"
                          ? "#e6f7ff"
                          : type === "소변"
                          ? "#fffbe6"
                          : "#f9f0ff",
                      color: "#000",
                      border: "1px solid #ccc",
                    }}
                  >
                    {type === "분유" ? value || "" : value ? "✅" : ""}
                  </td>
                );
              })}
            </React.Fragment>
          );
        })}
      </tr>
    ))}
  </tbody>
  <tfoot>
    <tr style={{ backgroundColor: "#ddd" }}>
      <td
        style={{
          fontWeight: "bold",
          textAlign: "center",
          padding: "6px",
          color: "#000000",
          border: "1px solid #ccc",
        }}
      >
        일합계
      </td>
      {days.map((day) => {
        const dateStr = format(day, "yyyy-MM-dd");
        const sum = (type: string) =>
          records
            .filter((r) => r.date === dateStr && r.type === type)
            .reduce((sum, r) => sum + Number(r.value || 0), 0);
        return (
          <React.Fragment key={dateStr}>
            <td
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#000000",
                border: "1px solid #ccc",
              }}
            >
              {sum("분유")}
            </td>
            <td
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#000000",
                border: "1px solid #ccc",
              }}
            >
              {sum("소변")}
            </td>
            <td
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#000000",
                border: "1px solid #ccc",
              }}
            >
              {sum("대변")}
            </td>
          </React.Fragment>
        );
      })}
    </tr>
  </tfoot>
</table>



    </div>
  );
}
