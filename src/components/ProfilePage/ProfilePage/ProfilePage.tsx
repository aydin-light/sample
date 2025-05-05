"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div className="profile-page">
      <h1>پروفایل من</h1>

      {/* Editable fields */}
      {["name", "email", "phone"].map((field) => (
        <div className="profile-field" key={field}>
          <label>{field === "name" ? "نام:" : field === "email" ? "ایمیل:" : "شماره تماس:"}</label>
          {editingField === field ? (
            <input
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              value={user[field as keyof typeof user]}
              onChange={handleFieldChange}
              onBlur={() => saveField(field as any)}
              onKeyDown={(e) => handleKeyDown(e, field as any)}
              autoFocus
            />
          ) : (
            <div className="profile-display">
              <span>{user[field as keyof typeof user] || "—"}</span>
              <button onClick={() => setEditingField(field as any)}>✏️ ویرایش</button>
            </div>
          )}
        </div>
      ))}

      {/* Purchase history */}
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

      {/* Logout button */}
      <button className="logout-btn" onClick={handleLogout}>🚪 خروج از حساب</button>
    </div>
  );
};

export default ProfilePage;
