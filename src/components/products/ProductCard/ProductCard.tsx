import React from "react";
import { useRouter } from "next/navigation";
import "./ProductCard.css";

interface ProductProps {
  name: string;
  price: string;
  inventory: number;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, inventory }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/public/product?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <h3>{name}</h3>
      <p>{price}</p>
      <span>موجودی: {inventory}</span>
    </div>
  );
};

export default ProductCard;
