"use client";

import React from "react";
import { CartItem } from "@/components/data/cartTypes";

interface Props {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  product: { name: string; price: number; inventory: number };
}

const QuantityControls: React.FC<Props> = ({ cartItems, setCartItems, product }) => {
  const updateQuantity = (name: string, amount: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(1, Math.min(item.quantity + amount, item.inventory)) }
          : item
      )
    );
  };

  const removeFromCart = (name: string) => {
    setCartItems(cartItems.filter((item) => item.name !== name));
    localStorage.setItem("cart", JSON.stringify(cartItems.filter((item) => item.name !== name)));
  };

  const itemInCart = cartItems.find((item) => item.name === product.name);

  return (
    <div className="cart-controls">
      <button onClick={() => updateQuantity(product.name, -1)}>➖</button>
      <span>{itemInCart?.quantity}</span>
      <button onClick={() => updateQuantity(product.name, 1)}>➕</button>
      <button className="remove" onClick={() => removeFromCart(product.name)}>🗑 حذف محصول</button>
    </div>
  );
};

export default QuantityControls;
