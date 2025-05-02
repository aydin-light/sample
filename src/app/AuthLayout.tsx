import React from "react";
import "./auth.css";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="fa">
      <body>
        <main className="auth-container">{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;
