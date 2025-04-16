"use client";
import React, { useState } from "react";
import "../modal.css";

const SubtractInventoryModal: React.FC<{ onClose: () => void; onConfirm: (amount: number) => void }> = ({ onClose, onConfirm }) => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>کاهش موجودی</h2>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
        />
        <button onClick={() => onConfirm(amount)}>تأیید</button>
        <button onClick={onClose}>لغو</button>
      </div>
    </div>
  );
};

export default SubtractInventoryModal;
