"use client";
import React, { useState } from "react";
import products from "../data/product";
import NewPriceModal from "../modals/price/NewPriceModal";
import AddDiscountModal from "../modals/price/AddDiscountModal";
import AddInventoryModal from "../modals/inventory/AddInventoryModal";
import SubtractInventoryModal from "../modals/inventory/SubtractInventoryModal";
import "./Management.css";

const Management: React.FC = () => {
  const [productData, setProductData] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState<{
    categoryIndex: number;
    subIndex: number;
    itemIndex: number;
  } | null>(null);
  const [modalType, setModalType] = useState<"price" | "discount" | "add" | "subtract" | null>(null);

  const updatePrice = (price: string) => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updated = [...productData];
      updated[categoryIndex].subcategories[subIndex].items[itemIndex].price = price;
      setProductData(updated);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  const applyDiscount = (discount: number) => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updated = [...productData];
      const originalPrice = parseFloat(
        updated[categoryIndex].subcategories[subIndex].items[itemIndex].price.replace(/[^0-9]/g, "")
      );
      const discountedPrice = originalPrice - (originalPrice * discount) / 100;
      updated[categoryIndex].subcategories[subIndex].items[itemIndex].price = `${discountedPrice.toFixed(0)} تومان`;
      setProductData(updated);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  const updateInventory = (amount: number) => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updated = [...productData];
      updated[categoryIndex].subcategories[subIndex].items[itemIndex].inventory += amount;
      setProductData(updated);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="management-section">
      <h2>پنل مدیریت قیمت و موجودی</h2>

      <div className="management-table-container">
        <table className="management-table">
          <thead>
            <tr>
              <th>دسته‌بندی</th>
              <th>زیر دسته</th>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>موجودی</th>
              <th>اقدامات</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((category, categoryIndex) =>
              category.subcategories.map((sub, subIndex) =>
                sub.items.map((item, itemIndex) => (
                  <tr key={`${categoryIndex}-${subIndex}-${itemIndex}`}>
                    <td>{category.category}</td>
                    <td>{sub.name}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.inventory}</td>
                    <td>
                      <button
                        className="management-btn price"
                        onClick={() => {
                          setModalType("price");
                          setSelectedProduct({ categoryIndex, subIndex, itemIndex });
                        }}
                      >
                        تغییر قیمت
                      </button>
                      <button
                        className="management-btn discount"
                        onClick={() => {
                          setModalType("discount");
                          setSelectedProduct({ categoryIndex, subIndex, itemIndex });
                        }}
                      >
                        تخفیف
                      </button>
                      <button
                        className="management-btn add"
                        onClick={() => {
                          setModalType("add");
                          setSelectedProduct({ categoryIndex, subIndex, itemIndex });
                        }}
                      >
                        +
                      </button>
                      <button
                        className="management-btn subtract"
                        onClick={() => {
                          setModalType("subtract");
                          setSelectedProduct({ categoryIndex, subIndex, itemIndex });
                        }}
                      >
                        -
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
          product={
            productData[selectedProduct.categoryIndex].subcategories[selectedProduct.subIndex].items[selectedProduct.itemIndex]
          }
          onClose={() => setModalType(null)}
          onConfirm={updatePrice}
        />
      )}

      {modalType === "discount" && selectedProduct && (
        <AddDiscountModal
          product={
            productData[selectedProduct.categoryIndex].subcategories[selectedProduct.subIndex].items[selectedProduct.itemIndex]
          }
          onClose={() => setModalType(null)}
          onConfirm={applyDiscount}
        />
      )}

      {modalType === "add" && (
        <AddInventoryModal
          onClose={() => setModalType(null)}
          onConfirm={(amount) => updateInventory(amount)}
        />
      )}

      {modalType === "subtract" && (
        <SubtractInventoryModal
          onClose={() => setModalType(null)}
          onConfirm={(amount) => updateInventory(-amount)}
        />
      )}
    </div>
  );
};

export default Management;
