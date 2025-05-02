import { googleLogin, facebookLogin } from "../lib/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogle = async () => {
    try {
      await googleLogin(); // 로그인만 수행
      // 이후 auth 상태가 바뀌면 onAuthStateChanged에서 처리
    } catch (e) {
      alert("로그인 실패");
    }
  };

  const handleFacebook = async () => {
    try {
      await facebookLogin();
    } catch (e) {
      alert("로그인 실패");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        router.push("/register"); // 최초 로그인 시 등록 페이지로
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
    <div style={{ padding: 40 }}>
      <h2>로그인</h2>
      <button onClick={handleGoogle}>구글 로그인</button>
      <br />
    </div>
  );
}
