"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<UserType | null>(null);
  const [showAccordion, setShowAccordion] = useState(false);

  type UserType = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
  };
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const parsedUser: UserType = JSON.parse(user);
      setLoggedInUser(parsedUser);
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    window.location.href = "/signin";
  };

  const handlePanelRedirect = () => {
    if (loggedInUser) {
      if (loggedInUser.role === "admin") {
        window.location.href = "/admin-panel";
      } else {
        window.location.href = "/profile";
      }
    }
  };

  return (
    <div>
      <nav className="navbar">
        <button className="site-name" onClick={() => (window.location.href = "/home")}>
          پروپی‌سی
        </button>
        <div className="nav-links">
          {loggedInUser ? (
            <>
              <button className="nav-item" onClick={handlePanelRedirect}>
                پنل
              </button>
              <button className="nav-item logout-button" onClick={handleLogout}>
                خروج
              </button>
            </>
          ) : (
            <button className="nav-item" onClick={() => (window.location.href = "/signin")}>
              ورود
            </button>
          )}
          <button className="products-text" onClick={() => setShowAccordion(!showAccordion)}>
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
