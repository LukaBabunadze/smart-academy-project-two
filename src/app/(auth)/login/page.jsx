"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

const page = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (result?.token) {
      redirect("/products");
    }
  };

  return (
    <main className={styles.main}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h3 className={styles.signin}>Sign In</h3>
        <p className={styles.desc}>please sign in to access market.</p>
        <input
          placeholder="username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type={passwordVisible ? "text" : "password"}
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          see password
        </button>
        <button className={styles.button} type="submit">
          Sign In
        </button>
        <Link href={"/register"}>
          <button className={styles.notResgitered}>
            don't have an account? Register
          </button>
        </Link>
      </form>
    </main>
  );
};

export default page;
