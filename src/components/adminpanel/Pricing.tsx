"use client";
import React, { useState } from "react";
import products from "../data/product";
import NewPriceModal from "../modals/price/NewPriceModal";
import AddDiscountModal from "../modals/price/AddDiscountModal";
import "./Pricing.css";

const Pricing: React.FC = () => {
  const [pricingData, setPricingData] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState<{ categoryIndex: number; subIndex: number; itemIndex: number } | null>(null);
  const [modalType, setModalType] = useState<"price" | "discount" | null>(null);

  const updatePrice = (price: string) => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updatedProducts = [...pricingData];
      updatedProducts[categoryIndex].subcategories[subIndex].items[itemIndex].price = price;
      setPricingData(updatedProducts);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  const applyDiscount = (discount: number) => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updatedProducts = [...pricingData];
      const originalPrice = parseFloat(updatedProducts[categoryIndex].subcategories[subIndex].items[itemIndex].price.replace(/[^0-9]/g, ""));
      const discountedPrice = originalPrice - (originalPrice * discount / 100);
      updatedProducts[categoryIndex].subcategories[subIndex].items[itemIndex].price = `${discountedPrice.toFixed(0)} تومان`;
      setPricingData(updatedProducts);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="admin-section">
      <h2>تنظیمات قیمت‌گذاری</h2>

      <div className="pricing-container">
        <table className="pricing-table">
          <thead>
            <tr>
              <th>دسته‌بندی</th>
              <th>زیر دسته</th>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>ویرایش قیمت</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((category, categoryIndex) =>
              category.subcategories.map((sub, subIndex) =>
                sub.items.map((item, itemIndex) => (
                  <tr key={`${categoryIndex}-${subIndex}-${itemIndex}`}>
                    <td>{category.category}</td>
                    <td>{sub.name}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button 
                        className="pricing-btn price" 
                        onClick={() => { setModalType("price"); setSelectedProduct({ categoryIndex, subIndex, itemIndex }); }}
                      >
                        تغییر قیمت
                      </button>
                      <button 
                        className="pricing-btn discount" 
                        onClick={() => { setModalType("discount"); setSelectedProduct({ categoryIndex, subIndex, itemIndex }); }}
                      >
                        افزودن تخفیف
                      </button>
                    </td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>

      {modalType === "price" && selectedProduct && (
        <NewPriceModal 
          product={pricingData[selectedProduct.categoryIndex].subcategories[selectedProduct.subIndex].items[selectedProduct.itemIndex]} 
          onClose={() => setModalType(null)} 
          onConfirm={updatePrice} 
        />
      )}

      {modalType === "discount" && selectedProduct && (
        <AddDiscountModal 
          product={pricingData[selectedProduct.categoryIndex].subcategories[selectedProduct.subIndex].items[selectedProduct.itemIndex]} 
          onClose={() => setModalType(null)} 
          onConfirm={applyDiscount} 
        />
      )}
    </div>
  );
};

export default Pricing;
