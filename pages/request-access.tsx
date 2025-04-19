import { useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../lib/firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";

export default function RequestAccessPage() {
  const [babyId, setBabyId] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRequest = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("로그인이 필요합니다.");
      return;
    }

    if (!babyId.trim()) {
      setError("❗ 아기 ID를 입력해주세요.");
      return;
    }

    try {
      const babyRef = doc(db, "babies", babyId.trim());
      const babyDoc = await getDoc(babyRef);

      if (!babyDoc.exists()) {
        setError("❌ 존재하지 않는 아기 ID입니다. 다시 확인해주세요.");
        return;
      }

      await addDoc(collection(db, "accessRequests"), {
        babyId: babyId.trim(),
        requestedBy: user.uid,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      alert("✅ 접근 요청이 전송되었습니다!");
      router.push("/");
    } catch (err) {
      console.error("요청 중 오류:", err);
      setError("⚠️ 요청 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", color: "#222", minHeight: "100vh" }}>
      <h1>👶 아기 접근 요청</h1>
      <input
        type="text"
        placeholder="아기 ID 입력 (예: 123456)"
        value={babyId}
        onChange={(e) => {
          setBabyId(e.target.value);
          setError(""); // 입력 시 에러 초기화
        }}
        style={{ marginBottom: "10px", width: "100%", padding: "8px", fontSize: "16px" }}
      />
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      <button
        onClick={handleRequest}
        style={{
          padding: "10px 16px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        요청하기
      </button>
    </div>
  );
}
