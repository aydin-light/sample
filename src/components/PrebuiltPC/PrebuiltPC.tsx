"use client";

import React, { useState } from "react";
import prebuiltPCs from "../data/prebuiltPCs";
import { useRouter } from "next/navigation";
import "./PrebuiltPC.css";

const PrebuiltPC: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"workstation" | "budgetGaming" | "highEndGaming">("workstation");
  const router = useRouter();

  const pcs = prebuiltPCs[selectedCategory];

  const handleClick = (pc: any) => {
    localStorage.setItem("selectedPC", JSON.stringify(pc));
    router.push("/public/pre-build/pc");
  };

  return (
    <div className="prebuilt-container">
      <div className="category-buttons">
        <button className={selectedCategory === "workstation" ? "active" : ""} onClick={() => setSelectedCategory("workstation")}>
          ورک‌استیشن
        </button>
        <button className={selectedCategory === "budgetGaming" ? "active" : ""} onClick={() => setSelectedCategory("budgetGaming")}>
          گیمینگ اقتصادی
        </button>
        <button className={selectedCategory === "highEndGaming" ? "active" : ""} onClick={() => setSelectedCategory("highEndGaming")}>
          گیمینگ حرفه‌ای
        </button>
      </div>

      <div className="pc-list">
        {pcs.map((pc, index) => (
          <div className="pc-card" key={index} onClick={() => handleClick(pc)}>
            <img src={pc.image} alt={pc.name} className="pc-image" />
            <h3>{pc.name}</h3>
            <p>{pc.description}</p>
            <p>قیمت: {pc.price.toLocaleString()} تومان</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrebuiltPC;
