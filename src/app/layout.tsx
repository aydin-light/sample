import React from "react";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2025 Your Website</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
