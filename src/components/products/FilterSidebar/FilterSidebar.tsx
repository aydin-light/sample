"use client"
import React, { useState } from "react";
import products from "@/components/data/product";
import "./FilterSidebar.css";

const FilterSidebar: React.FC<{ onFilterApply: (category: string, subcategory: string) => void }> = ({ onFilterApply }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const categories = [...new Set(products.map((product) => product.category))];
  const subcategories = selectedCategory 
    ? [...new Set(products.filter((product) => product.category === selectedCategory)
        .flatMap((product) => product.subcategories.map((sub) => sub.name)))]
    : [];

  const handleFilterApply = () => {
    onFilterApply(selectedCategory, selectedSubcategory);
  };

  return (
    <div className="filter-sidebar">
      <h2>فیلتر محصولات</h2>

      <label>دسته‌بندی</label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">انتخاب دسته‌بندی</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <label>زیر دسته‌بندی</label>
          <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)}>
            <option value="">انتخاب زیر دسته‌بندی</option>
            {subcategories.map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </>
      )}

      <button onClick={handleFilterApply}>اعمال فیلتر</button>
    </div>
  );
};

export default FilterSidebar;
