"use client"
import React, { useState, useEffect } from "react";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import ProductCard from "./ProductCard/ProductCard";
import products from "../data/product";
import "./Products.css";

const Products: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products.flatMap((p) => p.subcategories.flatMap((s) => s.items)));
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(24);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  if (!hydrated) return null;

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const applyFilter = (category: string, subcategory: string) => {
    const filtered = products
      .filter((p) => !category || p.category === category)
      .flatMap((p) => p.subcategories)
      .filter((s) => !subcategory || s.name === subcategory)
      .flatMap((s) => s.items);

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="products-container">
      <FilterSidebar onFilterApply={applyFilter} />
      <div>
        <div className="products">
          {currentItems.map((item) => (
            <ProductCard key={item.name} name={item.name} price={item.price} inventory={item.inventory} />
          ))}
        </div>
        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>قبلی</button>
          <span>صفحه {currentPage} از {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)}>بعدی</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
