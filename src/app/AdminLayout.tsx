import React from "react";
import Sidebar from "@/app/admin/admin-panel/Sidebar";
import "./admin.css";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa">
      <body>
        <div className="admin-layout">
          <Sidebar setSelectedOption={function (option: string): void {
                      throw new Error("Function not implemented.");
                  } } />
          <main className="admin-content">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default AdminLayout;
