"use client";
import React from "react";
import "../modal.css";

const DeleteProductModal: React.FC<{ productName: string; onClose: () => void; onConfirm: () => void }> = ({ productName, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>حذف محصول</h2>
        <p>آیا مطمئن هستید که می‌خواهید محصول را حذف کنید؟</p>
        <button onClick={onConfirm}>بله، حذف شود</button>
        <button onClick={onClose}>لغو</button>
      </div>
    </div>
  );
};

export default DeleteProductModal;
