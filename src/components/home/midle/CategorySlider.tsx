"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import products from "@/components/data/product";
import "./CategorySlider.css";

const categoryColors: string[] = ["#0068b5", "#ED1C24"];

const CategorySlider: React.FC = () => {
  const categories = products.map((product) => product.category);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = () => {
    router.push(`/products?category=${encodeURIComponent(categories[currentIndex])}`);
  };

  return (
    <div className="category-slider" style={{ backgroundColor: categoryColors[currentIndex % categoryColors.length] }} onClick={handleCategoryClick}>
      <h2>{categories[currentIndex]}</h2>
    </div>
  );
};

export default CategorySlider;
