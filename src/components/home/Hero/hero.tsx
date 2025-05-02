import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="/images/hero-image.jpg" alt="Site introduction" />
      </div>
      <div className="hero-content">
        <h1>به پرو پی  سی خوش آمدید</h1>
        <p>مکانی برای بهترین محصولات، قیمت‌گذاری هوشمند و مدیریت دقیق</p>
        <a href="/public/products" className="cta-button">مشاهده محصولات</a>
      </div>
    </section>
  );
};

export default Hero;
