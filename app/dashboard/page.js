"use client";

import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [matches, setMatches] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMatches = async () => {
      const querySnapshot = await getDocs(collection(db, "matches"));
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMatches(data);
    };

    fetchMatches();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>⚽ VB meccsek</h1>

      {matches.map((m) => (
        <div key={m.id} style={{ marginBottom: 10 }}>
          <b>{m.home}</b> vs <b>{m.away}</b>
          <div>{m.date}</div>
        </div>
      ))}
    </div>
  );
}