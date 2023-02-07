import React from 'react';
import style from './footer.module.scss';

function Footer() {
  return (
    <footer className={`${style.footer}`}>
      <div className="grid wide">
        <div className="row no-gutter">
          <div className="col text-start l-3 m-6 c-6">
            <h4>Địa chỉ</h4>
            <p>Something</p>
            <p>Something</p>
          </div>
          <div className="col text-start l-3 m-6 c-6">
            <h4>Liên hệ</h4>
            <p>Something</p>
            <p>Something</p>
          </div>
          <div className="col text-start l-3 m-6 c-6">
            <h4>Đơn vị vận chuyển</h4>
            <p>Something</p>
            <p>Something</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
