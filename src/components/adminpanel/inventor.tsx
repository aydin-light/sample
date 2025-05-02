"use client";
import React, { useState } from "react";
import products from "../data/product";
import AddInventoryModal from "../modals/inventory/AddInventoryModal";
import SubtractInventoryModal from "../modals/inventory/SubtractInventoryModal";
import "./Inventory.css";

const Inventory: React.FC = () => {
  const [inventoryData, setInventoryData] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState<{ categoryIndex: number; subIndex: number; itemIndex: number } | null>(null);
  const [modalType, setModalType] = useState<"add" | "subtract" | null>(null);

  const updateInventory = (amount: number) => {
    if (selectedProduct) {
      const { categoryIndex, subIndex, itemIndex } = selectedProduct;
      const updatedProducts = [...inventoryData];
      updatedProducts[categoryIndex].subcategories[subIndex].items[itemIndex].inventory += amount;
      setInventoryData(updatedProducts);
      setModalType(null);
      setSelectedProduct(null);
    }
  };

  return (
    <div className="admin-section">
      <h2>مدیریت موجودی</h2>

      <div className="inventory-container">
        <table className="inventory-table">
          <thead>
            <tr>
              <th>دسته‌بندی</th>
              <th>زیر دسته</th>
              <th>نام محصول</th>
              <th>موجودی</th>
              <th>ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((category, categoryIndex) =>
              category.subcategories.map((sub, subIndex) =>
                sub.items.map((item, itemIndex) => (
                  <tr key={`${categoryIndex}-${subIndex}-${itemIndex}`}>
                    <td>{category.category}</td>
                    <td>{sub.name}</td>
                    <td>{item.name}</td>
                    <td>{item.inventory}</td>
                    <td>
                      <button 
                        className="inventory-btn" 
                        onClick={() => { setModalType("add"); setSelectedProduct({ categoryIndex, subIndex, itemIndex }); }}
                      >
                        +
                      </button>
                      <button 
                        className="inventory-btn" 
                        onClick={() => { setModalType("subtract"); setSelectedProduct({ categoryIndex, subIndex, itemIndex }); }}
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
 
      {modalType === "add" && <AddInventoryModal onClose={() => setModalType(null)} onConfirm={(amount) => updateInventory(amount)} />}
      {modalType === "subtract" && <SubtractInventoryModal onClose={() => setModalType(null)} onConfirm={(amount) => updateInventory(-amount)} />}
    </div>
  );
};

export default Inventory;
