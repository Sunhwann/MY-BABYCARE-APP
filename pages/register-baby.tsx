import React, { useState } from "react";
import { auth, db } from "../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";

export default function RegisterBabyPage() {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const generateBabyId = async () => {
    let isUnique = false;
    let babyId = "";

    while (!isUnique) {
      babyId = String(Math.floor(100000 + Math.random() * 900000));
      const babyRef = doc(db, "babies", babyId);
      const babyDoc = await getDoc(babyRef);
      if (!babyDoc.exists()) isUnique = true;
    }

    return babyId;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 제출 동작 방지
    if (isSubmitting) return;

    setIsSubmitting(true);
    const user = auth.currentUser;
    if (!user) return;

    try {
      const babyId = await generateBabyId();

      await setDoc(doc(db, "babies", babyId), {
        name,
        birthdate,
        createdBy: user.uid,
        sharedWith: [user.uid],
      });

      router.push("/"); // 홈으로 이동
    } catch (error) {
      console.error("아기 등록 중 오류 발생:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", minHeight: "100vh", color: "#222" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>👶 아기 등록</h1>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <input
          type="text"
          placeholder="아기 이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            outline: "none",
          }}
        />
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          required
          style={{
            padding: "12px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#388E3C"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#4CAF50"}
        >
          {isSubmitting ? "등록 중..." : "등록"}
        </button>
      </form>
    </div>
  );
}
