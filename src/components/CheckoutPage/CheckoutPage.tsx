"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";
import { useRouter } from "next/navigation";
import "./CheckoutPage.css";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  inventory: number;
  image?: string;
}

const CheckoutPage: React.FC = () => {
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cash",
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.phone) {
      alert("لطفاً همه‌ی فیلدها را پر کنید.");
      return;
    }

    const purchase = {
      customer: formData,
      items: cartItems,
      total,
      date: new Date().toISOString(),
    };

    const existingPurchases = JSON.parse(localStorage.getItem("purchases") || "[]");
    localStorage.setItem("purchases", JSON.stringify([...existingPurchases, purchase]));

    cartItems.forEach((item) => {
      dispatch(removeFromCart({ name: item.name }));
    });

    router.push("/public/profile"); 
  };

  return (
    <div className="checkout-page">
      <h1>تکمیل سفارش</h1>

      {cartItems.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.name} className="checkout-item">
                <p>{item.name}</p>
                <p>{item.quantity} × {item.price.toLocaleString()} تومان</p>
              </div>
            ))}
            <h3>جمع کل: {total.toLocaleString()} تومان</h3>
          </div>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="نام کامل"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="آدرس"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="شماره تماس"
              value={formData.phone}
              onChange={handleChange}
            />

            <select name="payment" value={formData.payment} onChange={handleChange}>
              <option value="cash">پرداخت در محل</option>
              <option value="online">پرداخت آنلاین</option>
            </select>

            <button type="submit">پرداخت</button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
