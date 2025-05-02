"use client";

import ReduxWrapper from "../redux/ReduxWrapper";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../redux/cartSlice"; 
import { RootState } from "../redux/store"; 
import "./CartPage.css";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  inventory: number;
}

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <ReduxWrapper>
      <div className="cart-page">
        <h1>سبد خرید</h1>
        {cartItems.length > 0 ? (
          <div className="cart-items">
            {cartItems.map((item: CartItem) => (
              <div className="cart-item" key={item.name}>
                <div>
                  <h3>{item.name}</h3>
                  <p>قیمت: {item.price} تومان</p>
                  <p>موجودی: {item.inventory}</p>
                </div>
                <div className="cart-controls">
                  <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>
                    ➖
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>
                    ➕
                  </button>
                  <button className="remove" onClick={() => dispatch(removeFromCart({ name: item.name }))}>
                    🗑 حذف محصول
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>سبد خرید شما خالی است.</p>
        )}
      </div>
    </ReduxWrapper>
  );
};

export default CartPage;
