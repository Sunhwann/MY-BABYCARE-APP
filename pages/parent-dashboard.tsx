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
  deleteDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import Link from "next/link";

type Baby = {
  id: string;
  name: string;
  birthdate: string;
  sharedWith: string[];
};

type User = {
  name: string;
  role?: string;
};

type AccessRequest = {
  id: string;
  requestedBy: string;
  babyId: string;
  status: string;
};

export default function NannyDashboard() {
  const [babies, setBabies] = useState<Baby[]>([]);
  const [userData, setUserData] = useState<User | null>(null);
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchAll = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) return;

      const userInfo = userDoc.data() as User;
      setUserData(userInfo);

      const babySnap = await getDocs(
        query(collection(db, "babies"), where("sharedWith", "array-contains", user.uid))
      );
      setBabies(
        babySnap.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<Baby, "id">),
        }))
      );

      await fetchAccessRequests();
    };

    const fetchAccessRequests = async () => {
      const snapshot = await getDocs(collection(db, "accessRequests"));
      const filtered = snapshot.docs
        .map((doc) => ({ id: doc.id, ...(doc.data() as Omit<AccessRequest, "id">) }))
        .filter((r) => r.status !== "rejected");
      setRequests(filtered);
    };

    fetchAll();
  }, []);

  const handleApprove = async (req: AccessRequest) => {
    try {
      const babyRef = doc(db, "babies", req.babyId);
      const babyDoc = await getDoc(babyRef);
      if (!babyDoc.exists()) return alert("❌ 아기 정보를 찾을 수 없습니다.");

      const shared = babyDoc.data().sharedWith || [];
      await updateDoc(babyRef, {
        sharedWith: Array.from(new Set([...shared, req.requestedBy])),
      });

      await deleteDoc(doc(db, "accessRequests", req.id));
      await refreshRequests();
      alert("✅ 접근 요청을 승인했습니다.");
    } catch (err) {
      console.error(err);
      alert("⚠️ 승인 처리 중 오류가 발생했습니다.");
    }
  };

  const handleReject = async (id: string) => {
    try {
      await deleteDoc(doc(db, "accessRequests", id));
      setRequests((prev) => prev.filter((r) => r.id !== id));
      alert("❌ 요청이 거절되었습니다.");
    } catch (err) {
      console.error(err);
      alert("⚠️ 거절 처리 중 오류 발생.");
    }
  };

  const handleDeleteBaby = async (babyId: string) => {
    try {
      await deleteDoc(doc(db, "babies", babyId));
      setBabies((prev) => prev.filter((baby) => baby.id !== babyId));
      alert("✅ 아기를 삭제했습니다.");
    } catch (err) {
      console.error(err);
      alert("⚠️ 삭제 중 오류 발생.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err) {
      console.error("로그아웃 실패:", err);
      alert("⚠️ 로그아웃 오류.");
    }
  };

  const refreshRequests = async () => {
    const snapshot = await getDocs(collection(db, "accessRequests"));
    const updated = snapshot.docs
      .map((doc) => ({ id: doc.id, ...(doc.data() as Omit<AccessRequest, "id">) }))
      .filter((r) => r.status !== "rejected");
    setRequests(updated);
  };

  if (!userData) return <div>로딩 중...</div>;

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh", position: "relative" }}>
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#555",
          color: "#fff",
          borderRadius: "6px",
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        🚪 로그아웃
      </button>

      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        안녕하세요, {userData.name} 님 👋
      </h1>
      <h2 style={{ color: "#666", marginBottom: "20px" }}>역할: 보호자</h2>

      <button
        onClick={() => router.push("/register-baby")}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "6px",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        ➕ 아기 등록하기
      </button>

      <h3>🍼 내 아기 목록:</h3>
      {babies.length === 0 ? (
        <p>등록된 아기가 없습니다.</p>
      ) : (
        <ul style={{ padding: "0" }}>
          {babies.map((baby) => (
            <li key={baby.id} style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "6px", marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
              <Link href={`/baby/${baby.id}`} style={{ color: "#4CAF50", fontWeight: "bold" }}>
                {baby.name} ({baby.birthdate})
              </Link>
              <button
                onClick={() => handleDeleteBaby(baby.id)}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                }}
              >
                ❌ 삭제
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>🔐 접근 요청 목록:</h3>
      {requests.length === 0 ? (
        <p>접근 요청이 없습니다.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {requests.map((req) => (
            <div key={req.id} style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff" }}>
              <p>👶 아기 ID: {req.babyId}</p>
              <p>🙋 요청자 UID: {req.requestedBy}</p>
              <p>🕒 상태: {req.status}</p>
              <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleApprove(req)}
                  style={{ backgroundColor: "#4CAF50", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px" }}
                >
                  ✅ 승인
                </button>
                <button
                  onClick={() => handleReject(req.id)}
                  style={{ backgroundColor: "#f44336", color: "white", border: "none", padding: "6px 10px", borderRadius: "4px" }}
                >
                  ❌ 거절
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
