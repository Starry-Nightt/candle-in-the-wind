import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    const [countProduct, setCountProduct] = useState(1);
    return (
        <Tippy content="Giỏ hàng" placement="bottom">
            <Link to="/cart" className={cx('cart-icon')}>
                <FontAwesomeIcon icon={faOpencart} />
                {countProduct ? <div className={cx('count')}>{countProduct}</div> : null}
            </Link>
        </Tippy>
    );
}

export default Cart;
