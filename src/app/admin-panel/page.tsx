"use client";
import React from "react";
import AdminPanel from "@/components/adminpanel/adminpanel";
import "./page.css"

const AdminPanelPage: React.FC = () => {
  return (
    <div className="admin-page">
      <AdminPanel />
    </div>
  );
};

export default AdminPanelPage;
