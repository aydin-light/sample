"use client";

import ReduxWrapper from "@/components/redux/ReduxWrapper";
import React from "react";
import { useSearchParams } from "next/navigation";
import products from "@/components/data/product";
import "./ProductPage.css";
import { useDispatch } from "react-redux";
import { addToCart } from "@/components/redux/cartSlice"; 

const ProductPage: React.FC = () => {
  const searchParams = useSearchParams();
  const productName = searchParams.get("name");

  const product = products
    .flatMap((p) => p.subcategories.flatMap((s) => s.items))
    .find((item) => item.name === productName);

  const dispatch = useDispatch();

  if (!product) {
    return <h2>محصول مورد نظر یافت نشد</h2>;
  }

  return (
    <ReduxWrapper>
      <div className="product-page">
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>قیمت: {product.price} تومان</p>
          <p>موجودی: {product.inventory}</p>

          <button className="add-to-cart" onClick={() => dispatch(addToCart(product))}>
            افزودن به سبد خرید
          </button>
        </div>
        <div className="product-image">
          <img src={product.image || "/images/default-product.png"} alt={product.name} />
        </div>
      </div>
    </ReduxWrapper>
  );
};

export default ProductPage;
