// pages/nanny-dashboard.tsx
import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { useRouter } from "next/router";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";

export default function NannyDashboard() {
  const [babies, setBabies] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserDataAndBabies = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) return;

      const userInfo = userDoc.data();
      setUserData(userInfo);

      const q = query(
        collection(db, "babies"),
        where("sharedWith", "array-contains", user.uid)
      );
      const snapshot = await getDocs(q);
      const babyList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBabies(babyList);
    };

    fetchUserDataAndBabies();
  }, []);

  const handleRemoveBaby = async (babyId: string) => {
    if (!auth.currentUser) return;
    const confirm = window.confirm("정말 이 아기를 목록에서 삭제하시겠습니까?");
    if (!confirm) return;

    try {
      const babyRef = doc(db, "babies", babyId);
      await updateDoc(babyRef, {
        sharedWith: arrayRemove(auth.currentUser.uid),
      });

      setBabies((prev) => prev.filter((b) => b.id !== babyId));
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert("삭제에 실패했습니다.");
    }
  };

  if (!userData) return <div>로딩 중...</div>;

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#222",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>
        안녕하세요, {userData.name} 님 👋
      </h1>
      <h2 style={{ marginTop: "5px", color: "#555" }}>역할: 도우미</h2>

      <button
        onClick={() => router.push("/request-access")}
        style={{
          marginTop: "10px",
          marginBottom: "20px",
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "8px 16px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        ➕ 아기 추가하기
      </button>

      <h3 style={{ marginTop: "20px" }}>🍼 맡은 아기 목록:</h3>

      {babies.length === 0 ? (
        <p>맡은 아기가 없습니다.</p>
      ) : (
        <ul style={{ paddingLeft: "0", listStyle: "none" }}>
          {babies.map((baby) => (
            <li
              key={baby.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#f9f9f9",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "6px",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span
                style={{ cursor: "pointer", color: "#0070f3", fontWeight: 500 }}
                onClick={() => router.push(`/baby/${baby.id}`)}
              >
                {baby.name} ({baby.birthdate})
              </span>
              <button
                onClick={() => handleRemoveBaby(baby.id)}
                style={{
                  backgroundColor: "#e74c3c",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
