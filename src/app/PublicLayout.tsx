import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="public-container">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
