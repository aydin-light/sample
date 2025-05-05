"use client";

import ReduxWrapper from "../redux/ReduxWrapper";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import "./CartPage.css";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  inventory: number;
  image?: string;
}

const CartPage: React.FC = () => {
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  let total = 0;
  for (const item of cartItems) {
    total += item.price * item.quantity;
  }

  return (
    <ReduxWrapper>
      <div className="cart-page">
        <h1>سبد خرید</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="cart-items">
              {cartItems.map((item: CartItem) => (
                <div className="cart-item" key={item.name}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>قیمت: {item.price.toLocaleString()} تومان</p>
                    <p>موجودی: {item.inventory}</p>
                  </div>
                  <div className="cart-controls">
                    <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>➖</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>➕</button>
                    <button className="remove" onClick={() => dispatch(removeFromCart({ name: item.name }))}>🗑 حذف محصول</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h2>جمع کل: {total.toLocaleString()} تومان</h2>
              <button className="checkout-btn" onClick={() => router.push("/public/checkout")}>ادامه به پرداخت</button>
            </div>
          </>
        ) : (
          <p>سبد خرید شما خالی است.</p>
        )}
      </div>
    </ReduxWrapper>
  );
};

export default CartPage;
