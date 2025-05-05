"use client";

import "./ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <main className="contact-container">
      <div className="contact-banner">
        <img src="https://tse3.mm.bing.net/th?id=OIP.insp4OdyTgGerKdd59LlnAHaDR&pid=Api&P=0&h=220" alt="تماس با ProPC" className="contact-banner-image" />
        <div className="contact-banner-text">
          <h1>با ما در تماس باشید</h1>
          <p>همیشه آماده‌ایم کمکت کنیم</p>
        </div>
      </div>

      <section className="contact-section">
        <h2 className="contact-title">راه‌های ارتباطی</h2>
        <p className="contact-text">
          سوال، پیشنهاد یا نیاز به پشتیبانی دارید؟ راحت باشید و از هر کدوم از روش‌های زیر استفاده کنید.
        </p>

        <ul className="contact-list">
          <li><strong>📞 تلفن:</strong> 09121122334</li>
          <li><strong>📧 ایمیل:</strong> support@propc.com</li>
          <li><strong>📍 آدرس:</strong> تهران، خیابان فناوری، پلاک 10</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2 className="contact-title">ما را در شبکه‌های اجتماعی دنبال کنید</h2>
        <div className="contact-socials">
          <a href="https://instagram.com/propc" target="_blank" rel="noopener noreferrer">📸 اینستاگرام</a>
          <a href="https://t.me/propc" target="_blank" rel="noopener noreferrer">💬 تلگرام</a>
          <a href="https://twitter.com/propc" target="_blank" rel="noopener noreferrer">🐦 توییتر</a>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
