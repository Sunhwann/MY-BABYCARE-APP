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
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

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
      if (!babyDoc.exists()) return alert(t("noBabyInfo"));

      const shared = babyDoc.data().sharedWith || [];
      await updateDoc(babyRef, {
        sharedWith: Array.from(new Set([...shared, req.requestedBy])),
      });

      await deleteDoc(doc(db, "accessRequests", req.id));
      await refreshRequests();
      alert(t("approved"));
    } catch (err) {
      console.error(err);
      alert(t("approvalError"));
    }
  };

  const handleReject = async (id: string) => {
    try {
      await deleteDoc(doc(db, "accessRequests", id));
      setRequests((prev) => prev.filter((r) => r.id !== id));
      alert(t("rejected"));
    } catch (err) {
      console.error(err);
      alert(t("rejectionError"));
    }
  };

  const handleDeleteBaby = async (babyId: string) => {
    try {
      await deleteDoc(doc(db, "babies", babyId));
      setBabies((prev) => prev.filter((baby) => baby.id !== babyId));
      alert(t("babyDeleted"));
    } catch (err) {
      console.error(err);
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

  const refreshRequests = async () => {
    const snapshot = await getDocs(collection(db, "accessRequests"));
    const updated = snapshot.docs
      .map((doc) => ({ id: doc.id, ...(doc.data() as Omit<AccessRequest, "id">) }))
      .filter((r) => r.status !== "rejected");
    setRequests(updated);
  };

  if (!userData) return <div className="text-black">{t("loading")}</div>;

  return (
    <div className="p-5 bg-gray-100 min-h-screen relative text-black">
  {/* 오른쪽 상단 버튼 그룹 */}
  <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
    {/* 언어 선택 (가로 정렬) */}
    <div className="flex gap-2">
      <button onClick={() => handleLanguageChange("ko")} className="text-2xl">🇰🇷</button>
      <button onClick={() => handleLanguageChange("en")} className="text-2xl">🇺🇸</button>
      <button onClick={() => handleLanguageChange("vi")} className="text-2xl">🇻🇳</button>
    </div>
    {/* 로그아웃 버튼 (아래쪽) */}
    <button
      onClick={handleLogout}
      className="bg-gray-700 text-white rounded-md px-4 py-2 text-sm"
    >
      🚪 {t("logout")}
    </button>
  </div>

      <h1 className="text-3xl font-bold">{t("hello")}, {userData.name} 👋</h1>
      <h2 className="text-black mb-4">{t("role")}: {t("parent")}</h2>

      <button
        onClick={() => router.push("/register-baby")}
        className="bg-green-500 text-white px-5 py-3 rounded-md text-lg mb-5"
      >
        {t("registerBaby")}
      </button>

      <h3 className="text-xl font-semibold mb-2">🍼 {t("myBabies")}:</h3>
      {babies.length === 0 ? (
        <p className="text-black">{t("noBabies")}</p>
      ) : (
        <ul className="space-y-3">
          {babies.map((baby) => (
            <li key={baby.id} className="bg-white p-3 rounded-md flex justify-between items-center shadow-sm">
              <Link href={`/baby/${baby.id}`} className="text-green-600 font-semibold">
                {baby.name} ({baby.birthdate})
              </Link>
              <button
                onClick={() => handleDeleteBaby(baby.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md"
              >
                ❌ {t("delete")}
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3 className="text-xl font-semibold mt-8 mb-2">🔐 {t("accessRequests")}:</h3>
      {requests.length === 0 ? (
        <p className="text-black">{t("noRequests")}</p>
      ) : (
        <div className="flex flex-col gap-4">
          {requests.map((req) => (
            <div key={req.id} className="bg-white p-4 rounded-lg shadow-sm">
              <p>👶 {t("babyId")}: {req.babyId}</p>
              <p>🙋 {t("requester")}: {req.requestedBy}</p>
              <p>🕒 {t("status")}: {req.status}</p>
              <div className="mt-2 flex gap-3">
                <button
                  onClick={() => handleApprove(req)}
                  className="bg-green-500 text-white px-3 py-1 rounded-md"
                >
                  ✅ {t("approve")}
                </button>
                <button
                  onClick={() => handleReject(req.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  ❌ {t("reject")}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
