import React from 'react';
import style from './ads.module.scss';

function Ads() {
  const adsText = 'Đăng ký trở thành khách hàng thân thiết để nhận nhiều ưu đãi';
  return (
    <section className={`${style.ads}`}>
      <div className="grid wide text-center text-primary text-sm">
        <p>{adsText}</p>
      </div>
    </section>
  );
}

export default Ads;
