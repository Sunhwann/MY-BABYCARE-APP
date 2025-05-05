// pages/login.tsx
import { googleLogin, facebookLogin } from "../lib/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const router = useRouter();
  const { t, i18n } = useTranslation();

  const handleGoogle = async () => {
    try {
      await googleLogin();
    } catch (e) {
      alert("로그인 실패");
    }
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        router.push("/register");
        return;
      }

      const userInfo = userDoc.data();
      if (userInfo.role === "parent") {
        router.push("/parent-dashboard");
      } else if (userInfo.role === "nanny") {
        router.push("/nanny-dashboard");
      } else {
        alert("올바르지 않은 사용자 역할입니다.");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ padding: 40, maxWidth: 400, margin: "auto" }}>
    <div style={{ textAlign: "right", marginBottom: 20 }}>
      <button
        onClick={() => handleLanguageChange("ko")}
        style={{
          fontSize: 24,
          padding: "8px 12px",
          marginLeft: 8,
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        🇰🇷
      </button>
      <button
        onClick={() => handleLanguageChange("en")}
        style={{
          fontSize: 24,
          padding: "8px 12px",
          marginLeft: 8,
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        🇺🇸
      </button>
      <button
        onClick={() => handleLanguageChange("vi")}
        style={{
          fontSize: 24,
          padding: "8px 12px",
          marginLeft: 8,
          borderRadius: 8,
          cursor: "pointer",
        }}
      >
        🇻🇳
      </button>
    </div>
  



      <button
        onClick={handleGoogle}
        style={{
          backgroundColor: "#4285F4",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          width: "100%",
          marginTop: 20,
        }}
      >
        {t("googleLogin")}
      </button>

      {/* 추후 확장용 */}
      {/* <button onClick={handleFacebook}>Facebook Login</button> */}
    </div>
  );
}
