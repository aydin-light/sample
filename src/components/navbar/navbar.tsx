"use client"
import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div>
      <nav className="navbar">
        <button className="site-name" onClick={() => (window.location.href = "/home")}>
          پروپی‌سی
        </button>
        <div className="nav-links">
          <button className="nav-item" onClick={() => (window.location.href = "/signin")}>
            ورود
          </button>
          <button className="products-text" onClick={toggleAccordion}>
            محصولات
          </button>
          <button className="nav-item" onClick={() => (window.location.href = "/prebuild")}>
            سیستم‌های آماده
          </button>
          <button className="nav-item" onClick={() => (window.location.href = "/custom-build")}>
            اسمبل شخصی‌سازی‌شده
          </button>
        </div>
      </nav>
      {showAccordion && (
        <div className="accordion">
          <div className="accordion-category">
            <h3>پردازنده مرکزی (CPU)</h3>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/cpu/intel")}>
              اینتل
            </button>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/cpu/amd")}>
              ای‌ام‌دی
            </button>
          </div>
          <div className="accordion-category">
            <h3>کارت گرافیک (GPU)</h3>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/gpu/nvidia")}>
              انویدیا
            </button>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/gpu/amd")}>
              ای‌ام‌دی
            </button>
          </div>
          <div className="accordion-category">
            <h3>رم (RAM)</h3>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/ram/ddr4")}>
              DDR4
            </button>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/ram/ddr5")}>
              DDR5
            </button>
          </div>
          <div className="accordion-category">
            <h3>ذخیره‌سازی (Storage)</h3>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/storage/ssd")}>
              SSD
            </button>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/storage/hdd")}>
              HDD
            </button>
          </div>
          <div className="accordion-category">
            <h3>مادربرد (Motherboard)</h3>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/motherboard/intel")}>
              مادربرد اینتل
            </button>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/motherboard/amd")}>
              مادربرد ای‌ام‌دی
            </button>
          </div>
          <div className="accordion-category">
            <h3>منبع تغذیه (Power Supply)</h3>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/power-supply/500w")}>
              ۵۰۰ وات
            </button>
            <button className="accordion-item" onClick={() => (window.location.href = "/products/power-supply/750w")}>
              ۷۵۰ وات
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
