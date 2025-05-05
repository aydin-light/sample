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

  const [purchases, setPurchases] = useState<Purchase[]>([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storedUser);

    const savedPurchases = JSON.parse(localStorage.getItem("purchases") || "[]");
    setPurchases(savedPurchases);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <div className="profile-page">
      <h1>پروفایل من</h1>
      <div className="profile-form">
        <input
          type="text"
          name="name"
          placeholder="نام"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="شماره تماس"
          value={user.phone}
          onChange={handleChange}
        />
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
