"use client";
import React, { useState } from "react";
import products from "../data/product";
import "./AddProduct.css";

const AddProduct: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [inventory, setInventory] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    setSelectedSubcategory("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCategory || !selectedSubcategory || !name || !price || !inventory) {
      alert("لطفاً تمام فیلدها را پر کنید.");
      return;
    }
    alert(`${name} | ${selectedCategory} |  ${selectedSubcategory} |  ${price} |  ${inventory}`);
  };

  return (
    <div className="admin-section">
      <h2>افزودن محصول جدید</h2>
      <form onSubmit={handleSubmit}>
        <label>دسته‌بندی:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">انتخاب کنید</option>
          {products.map((category, index) => (
            <option key={index} value={category.category}>{category.category}</option>
          ))}
        </select>

        <label>زیر دسته:</label>
        <select value={selectedSubcategory} onChange={(e) => setSelectedSubcategory(e.target.value)} disabled={!selectedCategory}>
          <option value="">انتخاب کنید</option>
          {selectedCategory &&
            products.find((category) => category.category === selectedCategory)?.subcategories.map((sub, index) => (
              <option key={index} value={sub.name}>{sub.name}</option>
            ))}
        </select>

        <label>نام محصول:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>قیمت:</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

        <label>موجودی:</label>
        <input type="text" value={inventory} onChange={(e) => setInventory(e.target.value)} />

        <button type="submit">افزودن محصول</button>
      </form>
    </div>
  );
};

export default AddProduct;
