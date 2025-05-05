"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/redux/store";
import { addToCart, updateQuantity, removeFromCart } from "@/components/redux/cartSlice";
import "./SelectedPC.css";

interface PC {
  name: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  price: number;
  image: string;
  quantity?: number;
}

const SelectedPC: React.FC = () => {
  const [pc, setPc] = useState<PC | null>(null);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const cartItem = cart.find((item) => item.name === pc?.name);

  useEffect(() => {
    const storedPC = localStorage.getItem("selectedPC");
    if (storedPC) {
      setPc(JSON.parse(storedPC));
    }
  }, []);

  const handleAddToCart = () => {
    if (pc) {
      dispatch(addToCart({ ...pc, quantity: 1, inventory: 5 }));
    }
  };

  const handleIncrease = () => {
    if (cartItem) {
      dispatch(updateQuantity({ name: cartItem.name, quantity: cartItem.quantity + 1 }));
    }
  };

  const handleDecrease = () => {
    if (cartItem && cartItem.quantity > 1) {
      dispatch(updateQuantity({ name: cartItem.name, quantity: cartItem.quantity - 1 }));
    }
  };

  const handleRemove = () => {
    if (cartItem) {
      dispatch(removeFromCart({ name: cartItem.name }));
    }
  };

  if (!pc) return <p>در حال بارگذاری...</p>;

  return (
    <div className="selected-pc-container">
      <img className="selected-pc-image" src={pc.image} alt={pc.name} />
      <div className="selected-pc-specs">
      <h1 className="selected-pc-title">{pc.name}</h1>
        <p><strong>پردازنده:</strong> {pc.cpu}</p>
        <p><strong>کارت گرافیک:</strong> {pc.gpu}</p>
        <p><strong>رم:</strong> {pc.ram}</p>
        <p><strong>فضای ذخیره‌سازی:</strong> {pc.storage}</p>
        <h3 className="selected-pc-price">قیمت: {pc.price.toLocaleString()} تومان</h3>

        {cartItem ? (
          <div className="cart-controls">
            <button onClick={handleDecrease}>➖</button>
            <span>{cartItem.quantity}</span>
            <button onClick={handleIncrease}>➕</button>
            <button className="remove-btn" onClick={handleRemove}>🗑 حذف</button>
          </div>
        ) : (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>🛒 افزودن به سبد خرید</button>
        )}
      </div>
    </div>
  );
};

export default SelectedPC;
