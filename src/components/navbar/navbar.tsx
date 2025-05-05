"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedIn(!!user);
  }, []);
  const handleProfileClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!loggedIn) {
      e.preventDefault();
      router.push("/auth/signin");
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className={pathname === "/public/profile" ? "active" : ""}>
          <Link href="/public/profile" onClick={handleProfileClick}>
            👤 پروفایل
          </Link>
        </li>
        <li className={pathname === "/public/cart" ? "active" : ""}>
          <Link href="/public/cart">🛒 سبد خرید</Link>
        </li>
        <li className={pathname === "/public/products" ? "active" : ""}>
          <Link href="/public/products">محصولات</Link>
        </li>
        <li className={pathname === "/public/pre-build" ? "active" : ""}>
          <Link href="/public/pre-build">سیستم های آماده</Link>
        </li>
        <li className={pathname === "/public/about-us" ? "active" : ""}>
          <Link href="/public/about-us">درباره ما</Link>
        </li>
        <li className={pathname === "/public/contact" ? "active" : ""}>
          <Link href="/public/contact">تماس با ما</Link>
        </li>
      </ul>
      <div className="navbar-logo">
        <Link href="/">🖥️ ProPC</Link>
      </div>
    </nav>
  );
};

export default Navbar;
