"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Signup.css";

const Signup: React.FC = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (!user.name || !user.email || !user.phone || !user.password) {
            setMessage("لطفاً همه فیلدها را پر کنید.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const exists = users.find((u: any) => u.email === user.email);

        if (exists) {
            setMessage("کاربری با این ایمیل وجود دارد.");
            return;
        }

        const updatedUsers = [...users, { ...user, role: "user" }];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        router.push("/public/home");
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">ثبت‌نام</h2>
            <form className="signup-form" onSubmit={handleSignup}>
                <label>نام</label>
                <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="نام کامل" />
                <label>ایمیل</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="ایمیل" />
                <label>شماره تماس</label>
                <input type="tel" name="phone" value={user.phone} onChange={handleChange} placeholder="شماره تماس" />
                <label>رمز عبور</label>
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="رمز عبور" />
                <button type="submit" className="signup-button">ثبت‌نام</button>
            </form>
            {message && <p className="signup-message">{message}</p>}
            <p className="signup-login-link">
                قبلاً ثبت‌نام کرده‌اید؟{" "}
                <button onClick={() => router.push("/auth/signin")} className="link-button">ورود</button>
            </p>

        </div>
    );
};

export default Signup;
