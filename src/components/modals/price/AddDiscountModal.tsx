"use client";
import React, { useState } from "react";
import "../modal.css";

const AddDiscountModal: React.FC<{ product: any; onClose: () => void; onConfirm: (discount: number) => void }> = ({ product, onClose, onConfirm }) => {
  const [discount, setDiscount] = useState(0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>افزودن تخفیف</h2>
        <input 
          type="number" 
          value={discount} 
          onChange={(e) => setDiscount(Number(e.target.value))} 
        />
        <button onClick={() => onConfirm(discount)}>اعمال تخفیف</button>
        <button onClick={onClose}>لغو</button>
      </div>
    </div>
  );
};

export default AddDiscountModal;
