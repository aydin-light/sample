"use client";

import ReduxWrapper from "@/components/redux/ReduxWrapper";
import React from "react";
import { useSearchParams } from "next/navigation";
import products from "@/components/data/product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/redux/store";
import { addToCart, updateQuantity, removeFromCart } from "@/components/redux/cartSlice";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import "./ProductPage.css";

const ProductPage: React.FC = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("name");
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const product = products
    .flatMap((p) => p.subcategories.flatMap((s) => s.items))
    .find((item) => item.name === productName);

  const inCart = cart.find((item) => item.name === product?.name);

  if (!product) return <h2>محصول مورد نظر یافت نشد</h2>;

  return (
    <ReduxWrapper>
      <div className="product-page">
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>قیمت: {product.price.toLocaleString()} تومان</p>
          <p>موجودی: {product.inventory}</p>

          {inCart ? (
            <div className="cart-controls">
              <button onClick={() => dispatch(updateQuantity({ name: product.name, quantity: inCart.quantity - 1 }))}>➖</button>
              <span>{inCart.quantity}</span>
              <button onClick={() => dispatch(updateQuantity({ name: product.name, quantity: inCart.quantity + 1 }))}>➕</button>
              <button onClick={() => dispatch(removeFromCart({ name: product.name }))}>🗑 حذف</button>
            </div>
          ) : (
            <button
              className="add-to-cart"
              onClick={() =>
                dispatch(
                  addToCart({
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    inventory: product.inventory,
                    image: product.image,
                  })
                )
              }
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
        <div className="product-image">
          <img src={product.image || "/images/default-product.png"} alt={product.name} />
        </div>
      </div>
      <div>
          <RecommendedProducts/>
      </div>
    </ReduxWrapper>
  );
};

export default ProductPage;
