// pages/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function IndexPage() {
  const router = useRouter();

  useEffect(() => {
    const checkUserAndRedirect = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push("/login"); // 또는 로그인 화면
        return;
      }

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        alert("사용자 정보가 없습니다.");
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
    };

    checkUserAndRedirect();
  }, []);

  return <div>로딩 중입니다...</div>;
}
