"use client";
import React, { useState } from "react";
import products from "../data/product";
import EditProductModal from "../modals/products/EditProductModal";
import DeleteProductModal from "../modals/products/DeleteProductModal";
import "./Products.css";

const Products: React.FC = () => {
  const [productData, setProductData] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState<{ categoryIndex: number; subIndex: number; itemIndex: number } | null>(null);
  const [modalType, setModalType] = useState<"edit" | "delete" | null>(null);

  const deleteProduct = () => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updatedProducts = [...productData];
      updatedProducts[categoryIndex].subcategories[subIndex].items.splice(itemIndex, 1);
      setProductData(updatedProducts);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  const updateProduct = (name: string, price: string) => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updatedProducts = [...productData];
      updatedProducts[categoryIndex].subcategories[subIndex].items[itemIndex].name = name;
      updatedProducts[categoryIndex].subcategories[subIndex].items[itemIndex].price = price;
      setProductData(updatedProducts);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="admin-section">
      <h2>مدیریت محصولات</h2>

      <div className="products-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>ویرایش</th>
              <th>قیمت</th>
              <th>برند</th>
              <th>دسته‌بندی</th>
              <th>نام محصول</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((category, categoryIndex) =>
              category.subcategories.map((sub, subIndex) =>
                sub.items.map((item, itemIndex) => (
                  <tr key={`${categoryIndex}-${subIndex}-${itemIndex}`}>
                    <td>
                      <button 
                        className="product-btn delete" 
                        onClick={() => { setModalType("delete"); setSelectedProduct({ categoryIndex, subIndex, itemIndex }); }}
                      >
                        حذف
                      </button>
                      <button 
                        className="product-btn edit" 
                        onClick={() => { setModalType("edit"); setSelectedProduct({ categoryIndex, subIndex, itemIndex }); }}
                      >
                        ویرایش
                      </button>
                    </td>
                    <td>{item.price}</td>
                    <td>{sub.name}</td>
                    <td>{category.category}</td>
                    <td>{item.name}</td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>

      {modalType === "edit" && selectedProduct && (
        <EditProductModal 
          product={productData[selectedProduct.categoryIndex].subcategories[selectedProduct.subIndex].items[selectedProduct.itemIndex]} 
          onClose={() => setModalType(null)} 
          onConfirm={updateProduct} 
        />
      )}

      {modalType === "delete" && selectedProduct && (
        <DeleteProductModal 
          productName={productData[selectedProduct.categoryIndex].subcategories[selectedProduct.subIndex].items[selectedProduct.itemIndex].name} 
          onClose={() => setModalType(null)} 
          onConfirm={deleteProduct} 
        />
      )}
    </div>
  );
};

export default Products;
