"use client";

import React from "react";
import "./Terms.css";

const Terms: React.FC = () => {
  return (
    <main className="terms-container">
      <div className="terms-banner">
        <img src="https://www.cruisemummy.co.uk/wp-content/uploads/Rules.jpg" alt="قوانین و مقررات" className="terms-banner-image" />
        <div className="terms-banner-text">
          <h1>قوانین و مقررات</h1>
          <p>لطفاً قبل از استفاده از خدمات ما، این بخش رو بخونید</p>
        </div>
      </div>

      <section className="terms-section">
        <h2 className="terms-title">۱. پذیرش شرایط</h2>
        <p className="terms-text">
          با استفاده از سایت و خدمات ما، شما با شرایط و قوانین زیر موافقت می‌کنید. لطفاً با دقت مطالعه کنید.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-title">۲. استفاده مناسب</h2>
        <p className="terms-text">
          کاربران متعهد می‌شوند از وب‌سایت به صورت قانونی و با احترام به حقوق دیگران استفاده کنند. هرگونه سوءاستفاده می‌تواند موجب مسدود شدن دسترسی شود.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-title">۳. حفظ حریم خصوصی</h2>
        <p className="terms-text">
          اطلاعات شخصی شما با امنیت کامل نگهداری شده و فقط برای ارائه بهتر خدمات استفاده خواهد شد. برای جزئیات بیشتر، به بخش حریم خصوصی مراجعه کنید.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-title">۴. تغییرات در قوانین</h2>
        <p className="terms-text">
          ممکنه قوانین در آینده تغییر کنن. در صورت اعمال تغییرات، تاریخ به‌روزرسانی در این صفحه درج می‌شه.
        </p>
      </section>
    </main>
  );
};

export default Terms;
