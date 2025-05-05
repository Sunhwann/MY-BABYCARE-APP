// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import "../lib/i18n"; // 다국어 초기화
import { useTranslation } from "react-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [checkingUser, setCheckingUser] = useState(true);
  const { t } = useTranslation(); // 다국어 사용

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        // 등록된 유저가 아니고 현재 경로가 /register가 아닐 경우
        if (!snap.exists() && router.pathname !== "/register") {
          router.push("/register");
        } else {
          setCheckingUser(false);
        }
      } else {
        // 로그인하지 않은 경우, 로그인 페이지로 이동
        if (router.pathname !== "/login") {
          router.push("/login");
        }
        setCheckingUser(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (checkingUser) {
    return (
      <div style={{ textAlign: "center", paddingTop: "30vh", fontSize: "18px" }}>
        {t("loading")}...
      </div>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
