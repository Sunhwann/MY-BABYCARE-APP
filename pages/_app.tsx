// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [checkingUser, setCheckingUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        if (!snap.exists() && router.pathname !== "/register") {
          router.push("/register");
        } else {
          setCheckingUser(false);
        }
      } else {
        // 로그인 안 한 경우 로그인 페이지로 이동
        if (router.pathname !== "/login") {
          router.push("/login");
        }
        setCheckingUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (checkingUser) {
    return <div>로딩 중...</div>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
