"use client";
import React, { useState, useEffect } from "react";
import Products from "./Products";
import Pricing from "./Pricing";
import AddProduct from "./AddProduct";
import Inventory from "./inventor";
import "./adminpanel.css";

const AdminPanel: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [selectedOption, setSelectedOption] = useState("inventory");

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.role !== "admin") {
        window.location.href = "/profile";
      } else {
        setLoggedInUser(parsedUser);
      }
    } else {
      window.location.href = "/signin";
    }
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <button className="admin-option" onClick={() => setSelectedOption("inventory")}>
          مدیریت موجودی
        </button>
        <button className="admin-option" onClick={() => setSelectedOption("products")}>
          مدیریت محصولات
        </button>
        <button className="admin-option" onClick={() => setSelectedOption("pricing")}>
          تنظیمات قیمت‌گذاری
        </button>
        <button className="admin-option" onClick={() => setSelectedOption("add-product")}>
          افزودن محصول جدید
        </button>
      </div>
      <div className="admin-content">
        {selectedOption === "inventory" && <Inventory />}
        {selectedOption === "products" && <Products />}
        {selectedOption === "pricing" && <Pricing />}
        {selectedOption === "add-product" && <AddProduct />}
      </div>
    </div>
  );
};

export default AdminPanel;
