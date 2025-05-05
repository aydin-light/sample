"use client";
import React from "react";
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <main className="aboutus-container">
      <div className="aboutus-banner">
        <img src="https://blog.skillsuccess.com/wp-content/uploads/2020/06/happy-female-colleagues-at-a-work-meeting-smiling-to-camera.jpg" alt="تیم ما در ProPC" className="aboutus-banner-image" />
        <div className="aboutus-banner-text">
          <h1>درباره ما</h1>
          <p>یه تیم حرفه‌ای با یه هدف ساده: راحتی شما</p>
        </div>
      </div>

      <section className="aboutus-section">
        <h2 className="aboutus-title">ما کی هستیم؟</h2>
        <p className="aboutus-text">
          توی ProPC، ما عاشق تکنولوژی هستیم! از فروش قطعات گرفته تا مشاوره و پشتیبانی، اومدیم که کمک کنیم شما راحت‌تر انتخاب کنید و بهتر استفاده کنید.
        </p>
      </section>

      <section className="aboutus-section">
        <h2 className="aboutus-title">چرا ما رو انتخاب کنید؟</h2>
        <p className="aboutus-text">
          چون واقعاً به کارمون اهمیت می‌دیم. ما همیشه سعی می‌کنیم بهترین تجربه رو براتون بسازیم، با محصولای باکیفیت و یه تیم پشتیبانی که همیشه پشتتونه.
        </p>
      </section>

      <section className="aboutus-section">
        <h2 className="aboutus-title">در تماس باشیم</h2>
        <p className="aboutus-text">
          اگه سوالی داشتی یا خواستی بیشتر بدونی، یه سر به{" "}
          <a href="/public/contact" className="aboutus-link">صفحه تماس با ما</a> بزن یا تو شبکه‌های اجتماعی بهمون پیام بده. همیشه خوشحال می‌شیم صداتونو بشنویم!
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
