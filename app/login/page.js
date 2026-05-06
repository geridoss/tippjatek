"use client";

import { useState } from "react";
import { auth } from "../../lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch {
      alert("Hibás belépés");
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sikeres regisztráció");
    } catch {
      alert("Hiba regisztrációnál");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>VB Tippjáték</h1>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input
        type="password"
        placeholder="Jelszó"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Belépés</button>
      <button onClick={register}>Regisztráció</button>
    </div>
  );
}