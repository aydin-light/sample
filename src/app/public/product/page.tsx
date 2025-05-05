import React from "react";
import PublicLayout from "@/app/PublicLayout";
import ProductPage from "@/components/product/product/ProductPage";


const ProductDetailsPage: React.FC = () => {
  return (
    <PublicLayout>
      <ProductPage />
      
    </PublicLayout>
  );
};

export default ProductDetailsPage;
