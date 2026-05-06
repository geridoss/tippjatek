"use client";

import { useEffect } from "react";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/login");
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Üdv a VB Tippjátékban ⚽</h1>
    </div>
  );
}