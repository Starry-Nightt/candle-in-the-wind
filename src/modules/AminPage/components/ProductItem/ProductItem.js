import style from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';

const cx = classNames.bind(style);

function ProductItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('select')}>
        <input type={'checkbox'} />
      </div>
      <div className={cx('image')}>
        <img src={data.thumbnail} alt="Loading" />
      </div>
      <div className={cx('name')}>
        <div className={cx('title')}>{data.title}</div>
        <div className={cx('wrap-icon')}>
          <Tippy content="Chỉnh sửa">
            <div>
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
          </Tippy>
          <TippyHeadless
            appendTo={() => document.body}
            interactive
            delay={[0, 300]}
            render={(attrs) => (
              <div tabIndex="-1" {...attrs} className={cx('options')}>
                ok
              </div>
            )}
            hideOnClick={false}
          >
            <div className={cx('info')}>
              <FontAwesomeIcon icon={faInfo} />
            </div>
          </TippyHeadless>
        </div>
      </div>
      <div className={cx('id')}>{data.id}</div>
      <div className={cx('category')}>{data.category}</div>
      <div className={cx('price')}>{data.price}.000đ</div>
      <div className={cx('date')}>{data?.date || '15/2/2023'}</div>
    </div>
  );
}

export default ProductItem;
