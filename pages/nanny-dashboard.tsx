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
import { signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";

export default function NannyDashboard() {
  const [babies, setBabies] = useState<any[]>([]);
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

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
    const confirm = window.confirm(t("confirmRemove"));
    if (!confirm) return;

    try {
      const babyRef = doc(db, "babies", babyId);
      await updateDoc(babyRef, {
        sharedWith: arrayRemove(auth.currentUser.uid),
      });

      setBabies((prev) => prev.filter((b) => b.id !== babyId));
    } catch (error) {
      console.error("삭제 중 오류 발생:", error);
      alert(t("deleteError"));
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (err) {
      console.error("Logout error:", err);
      alert(t("logoutError"));
    }
  };

  if (!userData) return <div>{t("loading")}</div>;

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "#222",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* 언어 선택 및 로그아웃 버튼 */}
      <div style={{ position: "absolute", top: "20px", right: "20px", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
        <div>
          <button onClick={() => handleLanguageChange("ko")} style={{ fontSize: "24px", marginRight: "8px" }}>🇰🇷</button>
          <button onClick={() => handleLanguageChange("en")} style={{ fontSize: "24px", marginRight: "8px" }}>🇺🇸</button>
          <button onClick={() => handleLanguageChange("vi")} style={{ fontSize: "24px" }}>🇻🇳</button>
        </div>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#555",
            color: "#fff",
            borderRadius: "6px",
            padding: "8px 14px",
            cursor: "pointer",
          }}
        >
          🚪 {t("logout")}
        </button>
      </div>

      <h1 style={{ fontWeight: "bold" }}>
        {t("hello")}, {userData.name} 👋
      </h1>
      <h2 style={{ marginTop: "5px", color: "#555" }}>{t("role")}: {t("nanny")}</h2>

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
        ➕ {t("addBaby")}
      </button>

      <h3 style={{ marginTop: "20px" }}>🍼 {t("assignedBabies")}:</h3>

      {babies.length === 0 ? (
        <p>{t("noAssignedBabies")}</p>
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
                {t("remove")}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
