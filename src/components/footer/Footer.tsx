"use client"
import React from "react"
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ProPC. All rights reserved.</p>
      <div className="footer-links">
        <a href="/about">درباره ما</a>
        <a href="/contact">تماس با ما</a>
        <a href="/terms">قوانین و مقررات</a>
      </div>
    </footer>
  );
};

export default Footer;
