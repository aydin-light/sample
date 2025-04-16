"use client";
import React, { useState } from "react";
import "../modal.css";

const EditProductModal: React.FC<{ product: any; onClose: () => void; onConfirm: (name: string, price: string) => void }> = ({ product, onClose, onConfirm }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>ویرایش محصول</h2>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="text" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button onClick={() => onConfirm(name, price)}>تأیید</button>
        <button onClick={onClose}>لغو</button>
      </div>
    </div>
  );
};

export default EditProductModal;
