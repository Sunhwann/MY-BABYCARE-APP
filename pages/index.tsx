import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function IndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push("/login");
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
    });

    return () => unsubscribe();
  }, []);

  return <div>로딩 중입니다...</div>;
}
