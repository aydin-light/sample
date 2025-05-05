"use client";

import React, { useMemo } from "react";
import productsData from "@/components/data/product";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "./RecommendedProducts.css";

interface Product {
  name: string;
  price: number;
  inventory: number;
  image?: string;
}

const RecommendedProducts: React.FC = () => {
  const searchParams = useSearchParams();
  const currentProductName = searchParams.get("name");

  const recommended = useMemo(() => {
    const allProducts: Product[] = productsData
      .flatMap(p => p.subcategories.flatMap(s => s.items))
      .filter(p => p.name !== currentProductName);

    const shuffled = [...allProducts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [currentProductName]);

  return (
    <div className="recommended-products">
      <h2>محصولات پیشنهادی</h2>
      <div className="recommended-list">
        {recommended.map(product => (
          <div key={product.name} className="recommended-card">
            <Link href={`/public/product?name=${encodeURIComponent(product.name)}`}>
              <img src={product.image || "/images/default-product.png"} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()} تومان</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
