"use client";

import React, { useEffect, useState } from "react";
import "./ProfilePage.css";

interface Purchase {
  customer: {
    name: string;
    address: string;
    phone: string;
    payment: string;
  };
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number;
  date: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [editingField, setEditingField] = useState<null | "name" | "email" | "phone">(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);

    const savedPurchases = JSON.parse(localStorage.getItem("purchases") || "[]");
    setPurchases(savedPurchases);
  }, []);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveField = (field: "name" | "email" | "phone") => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditingField(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, field: "name" | "email" | "phone") => {
    if (e.key === "Enter") {
      saveField(field);
    }
  };

  return (
    <div className="profile-page">
      <h1>پروفایل من</h1>
      <div className="profile-field">
        <label>نام:</label>
        {editingField === "name" ? (
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleFieldChange}
            onBlur={() => saveField("name")}
            onKeyDown={(e) => handleKeyDown(e, "name")}
            autoFocus
          />
        ) : (
          <div className="profile-display">
            <span>{user.name || "—"}</span>
            <button onClick={() => setEditingField("name")}>✏️ ویرایش</button>
          </div>
        )}
      </div>

      <div className="profile-field">
        <label>ایمیل:</label>
        {editingField === "email" ? (
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleFieldChange}
            onBlur={() => saveField("email")}
            onKeyDown={(e) => handleKeyDown(e, "email")}
            autoFocus
          />
        ) : (
          <div className="profile-display">
            <span>{user.email || "—"}</span>
            <button onClick={() => setEditingField("email")}>✏️ ویرایش</button>
          </div>
        )}
      </div>

      <div className="profile-field">
        <label>شماره تماس:</label>
        {editingField === "phone" ? (
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleFieldChange}
            onBlur={() => saveField("phone")}
            onKeyDown={(e) => handleKeyDown(e, "phone")}
            autoFocus
          />
        ) : (
          <div className="profile-display">
            <span>{user.phone || "—"}</span>
            <button onClick={() => setEditingField("phone")}>✏️ ویرایش</button>
          </div>
        )}
      </div>

      <div className="purchase-history">
        <h2>سفارش‌های من</h2>
        {purchases.length === 0 ? (
          <p>سفارشی ثبت نشده است.</p>
        ) : (
          purchases.map((purchase, index) => (
            <div key={index} className="purchase">
              <p><strong>تاریخ:</strong> {new Date(purchase.date).toLocaleDateString()}</p>
              <p><strong>مبلغ کل:</strong> {purchase.total.toLocaleString()} تومان</p>
              <ul>
                {purchase.items.map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.quantity} - {item.price.toLocaleString()} تومان
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
