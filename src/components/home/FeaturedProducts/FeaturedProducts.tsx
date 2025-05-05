"use client";
import React from "react";
import { useRouter } from "next/navigation";
import products from "@/components/data/product";
import "./FeaturedProducts.css";

const FeaturedProducts: React.FC = () => {
  const router = useRouter();

  const featuredItems = products.map((product) => ({
    category: product.category,
    item: product.subcategories[0].items[0],
  }));

  const handleClick = (itemName: string) => {
    router.push(`/public/product?name=${encodeURIComponent(itemName)}`);
  };

  return (
    <div className="featured-products">
      {featuredItems.map(({ category, item }) => (
        <div className="product-card" key={item.name} onClick={() => handleClick(item.name)}>
          <img
            src={item.image || "/images/default-product.png"}
            alt={item.name}
            className="product-image"
          />
          <h3>{category}</h3>
          <p>{item.name}</p>
          <span>{item.price.toLocaleString()} تومان</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
