// pages/register.tsx
import { useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [role, setRole] = useState<"parent" | "nanny">("parent");
  const [uid, setUid] = useState<string | null>(null);

  // 로그인된 유저 uid 가져오기
  onAuthStateChanged(auth, (user) => {
    if (user && !uid) {
      setUid(user.uid);
    }
  });

  const handleSubmit = async () => {
    if (!uid) return alert("로그인이 필요합니다");
    if (!name) return alert("이름을 입력해주세요");

    try {
      await setDoc(doc(db, "users", uid), {
        name,
        role,
      });

      alert("등록 완료!");
      router.push("/"); // 홈이나 dashboard로 이동
    } catch (error) {
      console.error("등록 실패:", error);
      alert("등록 중 오류가 발생했습니다");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>사용자 등록</h2>
      <input
        type="text"
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <label>
        <input
          type="radio"
          value="parent"
          checked={role === "parent"}
          onChange={() => setRole("parent")}
        />
        보호자
      </label>
      <label style={{ marginLeft: 20 }}>
        <input
          type="radio"
          value="nanny"
          checked={role === "nanny"}
          onChange={() => setRole("nanny")}
        />
        도우미
      </label>

      <br />
      <button onClick={handleSubmit} style={{ marginTop: 20 }}>
        등록하기
      </button>
    </div>
  );
}
