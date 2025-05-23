"use client";

import React, { useState } from "react";
import users from "../data/users";
import { useRouter } from "next/navigation";
import "./Signin.css";

const Signin: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const user = users.find((u) => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      if (user.role === "admin") {
        router.push("/admin/admin-panel");
      } else {
        router.push("/public/home");
      }
    } else {
      setMessage("ایمیل یا رمز عبور اشتباه است.");
    }
  };

  return (
    <div className="signin-container">
      <h2 className="signin-title">ورود</h2>
      <form className="signin-form" onSubmit={handleLogin}>
        <label className="signin-label" htmlFor="email">ایمیل</label>
        <input
          type="email"
          id="email"
          className="signin-input"
          placeholder="ایمیل خود را وارد کنید"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="signin-label" htmlFor="password">رمز عبور</label>
        <input
          type="password"
          id="password"
          className="signin-input"
          placeholder="رمز عبور خود را وارد کنید"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="signin-button">ورود</button>
      </form>
      {message && <p className="signin-message">{message}</p>}

      <p className="signin-login-link">
        حساب ندارید؟{" "}
        <button
          className="link-button"
          onClick={() => router.push("/auth/signup")}
        >
          ثبت‌نام کنید
        </button>
      </p>
    </div>
  );
};

export default Signin;
