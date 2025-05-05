"use client";

import Link from "next/link";
import React from "react";
import "./Navbar.css";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className={pathname === "/public/profile" ? "active" : ""}>
          <Link href="/public/profile">👤 پروفایل</Link>
        </li>
        <li className={pathname === "/public/cart" ? "active" : ""}>
          <Link href="/public/cart">🛒 سبد خرید</Link>
        </li>
        <li className={pathname === "/public/products" ? "active" : ""}>
          <Link href="/public/products">محصولات</Link>
        </li>
        <li className={pathname === "/public/pre-build" ? "active" : ""}>
          <Link href="/public/pre-build">سیستم های اماده</Link>
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
