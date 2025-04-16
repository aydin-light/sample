"use client";
import React, { useState } from "react";
import "../modal.css";

const NewPriceModal: React.FC<{ product: any; onClose: () => void; onConfirm: (price: string) => void }> = ({ product, onClose, onConfirm }) => {
  const [price, setPrice] = useState(product.price);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>ویرایش قیمت</h2>
        <input 
          type="text" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button onClick={() => onConfirm(price)}>تأیید</button>
        <button onClick={onClose}>لغو</button>
      </div>
    </div>
  );
};

export default NewPriceModal;
