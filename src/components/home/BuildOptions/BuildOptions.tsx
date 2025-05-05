import React from "react";
import "./BuildOptions.css";

const BuildOptions: React.FC = () => {
  return (
    <div className="build-options">
      <div className="pre-build">
        <div className="text-content">
          <h2>چرا یک سیستم از پیش‌ساخته بخرید؟</h2>
          <p>✅ بدون نیاز به اسمبل دستی، آماده استفاده</p>
          <p>✅ تست شده برای عملکرد بهینه و پایداری</p>
          <p>✅ دارای گارانتی و پشتیبانی فنی</p>
          <p>✅ مناسب برای کاربرانی که راحتی و سرعت را می‌خواهند</p>
          <a href="/public/pre-build" className="cta-button">مشاهده سیستم‌های از پیش‌ساخته</a>
        </div>
        <div className="image-content">
          <img src="https://cdn11.bigcommerce.com/s-4m2h5qre5t/images/stencil/original/products/148/614/20231770215_prev_ui__30696.1706359402.png" alt="Pre-built PC" />
        </div>
      </div>
    </div>
  );
};

export default BuildOptions;
