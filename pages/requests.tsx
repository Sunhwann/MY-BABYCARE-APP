// pages/requests.tsx
import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import {
  collection, getDocs, query, where, doc, updateDoc, getDoc
} from "firebase/firestore";

export default function AccessRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(collection(db, "accessRequests"), where("status", "==", "pending"));
      const snapshot = await getDocs(q);

      const pending = [];

      for (const d of snapshot.docs) {
        const data = d.data();
        const babySnap = await getDoc(doc(db, "babies", data.babyId));
        if (babySnap.exists() && babySnap.data().createdBy === user.uid) {
          pending.push({ id: d.id, ...data });
        }
      }

      setRequests(pending);
    };

    fetchRequests();
  }, []);

  const handleApprove = async (request: any) => {
    const babyRef = doc(db, "babies", request.babyId);
    const babySnap = await getDoc(babyRef);

    if (babySnap.exists()) {
      const babyData = babySnap.data();
      const sharedWith = [...(babyData.sharedWith || []), request.requestedBy];

      await updateDoc(babyRef, { sharedWith });
      await updateDoc(doc(db, "accessRequests", request.id), { status: "approved" });
      alert("승인 완료!");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>👩‍⚕️ 접근 요청 승인</h1>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>
            Baby ID: {req.babyId}, 요청자: {req.requestedBy}
            <button onClick={() => handleApprove(req)}>승인</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
