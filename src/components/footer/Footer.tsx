"use client";

import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-links">
          <a href="/public/about-us">درباره ما</a>
          <a href="/public/contact">تماس با ما</a>
          <a href="/public/terms">قوانین و مقررات</a>
        </div>
        <div className="footer-section footer-social">
          <h4>ما را دنبال کنید</h4>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">اینستاگرام</a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">توییتر</a>
        </div>
        <div className="footer-section footer-address">
          <h4>آدرس</h4>
          <p> تهران، خیابان فناوری، پلاک ۱۰</p>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} ProPC. تمامی حقوق محفوظ است.</p>
    </footer>
  );
};

export default Footer;
