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

export default function NannyDashboard() {
  const [babies, setBabies] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>(null);
  const [requests, setRequests] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserDataAndBabies = async () => {
      const user = auth.currentUser;
      if (!user) return;

      // 사용자 정보 가져오기
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) return;

      const userInfo = userDoc.data();
      setUserData(userInfo);

      // sharedWith에 포함된 아기만 쿼리
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

    type RequestData = {
      status: string;
      [key: string]: any;
    };

    const fetchAccessRequests = async () => {
      const snapshot = await getDocs(collection(db, "accessRequests"));
      const requestList = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((req) => req.status !== "rejected"); // rejected 상태 제외
      setRequests(requestList);
    };

    fetchUserDataAndBabies();
    fetchAccessRequests();
  }, []);

  if (!userData) return <div>로딩 중...</div>;

  const handleApprove = async (req: any) => {
    try {
      const babyRef = doc(db, "babies", req.babyId);
      const babyDoc = await getDoc(babyRef);

      if (!babyDoc.exists()) {
        alert("❌ 해당 아기 문서를 찾을 수 없습니다.");
        return;
      }

      const currentShared = babyDoc.data().sharedWith || [];
      await updateDoc(babyRef, {
        sharedWith: [...new Set([...currentShared, req.requestedBy])],
      });

      await deleteDoc(doc(db, "accessRequests", req.id));

      alert("✅ 승인되었습니다!");
      const snapshot = await getDocs(collection(db, "accessRequests"));
      const requestList = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((req) => req.status !== "rejected");
      setRequests(requestList);
    } catch (err) {
      console.error(err);
      alert("⚠️ 승인 중 문제가 발생했습니다.");
    }
  };

  const handleReject = async (id: string) => {
    try {
      await deleteDoc(doc(db, "accessRequests", id));
      setRequests((prev) => prev.filter((req) => req.id !== id));
      alert("❌ 거절되었습니다.");
    } catch (err) {
      console.error(err);
      alert("⚠️ 거절 처리 중 오류가 발생했습니다.");
    }
  };

  const handleDeleteBaby = async (babyId: string) => {
    try {
      await deleteDoc(doc(db, "babies", babyId));
      setBabies((prev) => prev.filter((baby) => baby.id !== babyId));
      alert("✅ 아기가 삭제되었습니다.");
    } catch (err) {
      console.error(err);
      alert("⚠️ 아기 삭제 중 오류가 발생했습니다.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err) {
      console.error("로그아웃 실패:", err);
      alert("⚠️ 로그아웃 중 오류가 발생했습니다.");
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        color: "#222",
        position: "relative",
      }}
    >
      {/* 로그아웃 버튼 */}
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#555",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#333")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#555")
        }
      >
        🚪 로그아웃
      </button>

      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
        안녕하세요, {userData.name} 님 👋
      </h1>
      <h2 style={{ fontSize: "24px", color: "#555", marginBottom: "20px" }}>
        역할: 보호자
      </h2>

      <button
        onClick={() => router.push("/register-baby")}
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          padding: "12px 20px",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
          fontSize: "16px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        ➕ 아기 등록하기
      </button>

      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>🍼 내 아기 목록:</h3>
      {babies.length === 0 ? (
        <p>등록된 아기가 없습니다.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {babies.map((baby) => (
            <li
              key={baby.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: "12px",
                marginBottom: "8px",
                backgroundColor: "#fff",
                borderRadius: "6px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <Link
                href={`/baby/${baby.id}`}
                style={{
                  color: "#4CAF50",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                {baby.name} ({baby.birthdate})
              </Link>
              <button
                onClick={() => handleDeleteBaby(baby.id)}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#d32f2f")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f44336")
                }
              >
                ❌ 삭제
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
        🔐 접근 요청 목록:
      </h3>
      {requests.length === 0 ? (
        <p>접근 요청이 없습니다.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {requests.map((req) => (
            <div
              key={req.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <p>👶 아기 ID: {req.babyId}</p>
              <p>🙋 요청자 UID: {req.requestedBy}</p>
              <p>🕒 상태: {req.status}</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button
                  onClick={() => handleApprove(req)}
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#388E3C")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#4CAF50")
                  }
                >
                  ✅ 승인
                </button>
                <button
                  onClick={() => handleReject(req.id)}
                  style={{
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#d32f2f")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f44336")
                  }
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
