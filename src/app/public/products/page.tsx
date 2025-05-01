import React from "react";
import PublicLayout from "@/app/PublicLayout";
import Products from "@/components/products/products";
const ProductsPage: React.FC = () => {
  return (
    <PublicLayout>
      <Products/>
    </PublicLayout>
  );
};

export default ProductsPage;
