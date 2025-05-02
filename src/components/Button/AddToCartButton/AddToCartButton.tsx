"use client";

import React from "react";
import { CartItem } from "@/components/data/cartTypes";

interface Props {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  product: { name: string; price: number; inventory: number };
}

const AddToCartButton: React.FC<Props> = ({ cartItems, setCartItems, product }) => {
  const addToCart = () => {
    setCartItems((prevCart) => {
      const storedCart = localStorage.getItem("cart");
      const currentCart: CartItem[] = storedCart ? JSON.parse(storedCart) : prevCart;

      const existingItem = currentCart.find((item) => item.name === product.name);
      if (existingItem) {
        const updatedCart = currentCart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: Math.min(item.quantity + 1, item.inventory) }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }

      const newCart = [
        ...currentCart,
        { name: product.name, price: Number(product.price), quantity: 1, inventory: product.inventory },
      ];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };
  return <button className="add-to-cart" onClick={addToCart}>افزودن به سبد خرید</button>;
};

export default AddToCartButton;
