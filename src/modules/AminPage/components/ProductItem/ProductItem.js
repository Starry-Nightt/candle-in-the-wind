import style from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import { menu } from '../../AdminPage';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductItem({ data, addDeleteItem, removeDeleteItem, deleteItem }) {
  const navigate = useNavigate();

  function handleUpdate(id) {
    menu[0].subMenu.push({
      label: 'Cập nhật thông tin sản phẩm',
      path: `/admin/product/update/${id}`,
    });
    navigate(`/admin/product/update/${id}`);
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('select')}>
        <input
          type={'checkbox'}
          checked={deleteItem.includes(data.id)}
          onChange={(e) => {
            if (e.target.checked) {
              addDeleteItem([data.id]);
            } else {
              removeDeleteItem([data.id]);
            }
          }}
        />
      </div>
      <div className={cx('image')}>
        <img src={data.thumbnail} alt="Loading" />
      </div>
      <div className={cx('name')}>
        <div className={cx('title')}>{data.title}</div>
        <div className={cx('wrap-icon')}>
          <Tippy content="Chỉnh sửa">
            <div onClick={() => handleUpdate(data.id)}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </div>
          </Tippy>
          <TippyHeadless
            appendTo={() => document.body}
            interactive
            delay={[0, 300]}
            render={(attrs) => (
              <div tabIndex="-1" {...attrs} className={cx('options')}>
                Thông tin sản phẩm
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
