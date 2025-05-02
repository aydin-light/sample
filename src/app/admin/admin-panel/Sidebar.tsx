"use client"
import React from "react";
import "./sidebar.css";

const Sidebar: React.FC<{ setSelectedOption: (option: string) => void }> = ({ setSelectedOption }) => {
  return (
    <div className="admin-sidebar">
      <button className="admin-option" onClick={() => setSelectedOption("inventory")}>
        مدیریت موجودی
      </button>
      <button className="admin-option" onClick={() => setSelectedOption("products")}>
        مدیریت محصولات
      </button>
      <button className="admin-option" onClick={() => setSelectedOption("pricing")}>
        قیمت‌گذاری
      </button>
      <button className="admin-option" onClick={() => setSelectedOption("add-product")}>
        افزودن محصول جدید
      </button>
    </div>
  );
};

export default Sidebar;
