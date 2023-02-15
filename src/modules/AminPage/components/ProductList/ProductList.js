import style from './ProductList.module.scss';
import classNames from 'classnames/bind';
import ProductItem from '../ProductItem/ProductItem';
import { categoryList } from '~/layout/header/components/category/category';
import sortFilterList from '~/modules/Products/TopFilter/sortFilterList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { loadProduct } from '~/redux/product/product.thunk';
import { useLocation } from 'react-router-dom';
import Spinner from '~/shared/components/spinner/spinner';
import PageNumber from '~/modules/Products/PageNumber/PageNumber';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function ProductList() {
  const { product, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [numbersPage, setNumbersPage] = useState([1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [sortFilter, setSortFilter] = useState(sortFilterList[0]);

  useEffect(() => {
    dispatch(loadProduct());
  }, [pathname]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('search')}>
        <span>Tìm kiếm:</span>
        <input placeholder="Nhập mã sản phẩm hoặc tên sản phẩm để tìm kiếm..." />
      </div>

      <div className={cx('wrap-line')}>
        <span className={cx('filter')}>
          <span>Danh mục:</span>
          <select>
            {categoryList.map((category, index) => (
              <option key={index}>{category.viewValue}</option>
            ))}
          </select>
          <span>Sắp xếp:</span>
          <select>
            {sortFilterList.map((filter, index) => (
              <option key={index}>{filter.label}</option>
            ))}
          </select>
        </span>

        <div className={cx('page')}>
          <PageNumber>
            <FontAwesomeIcon
              onClick={() =>
                setCurrentPage((prev) => {
                  return prev > 1 ? prev - 1 : prev;
                })
              }
              icon={faCaretLeft}
            />
          </PageNumber>
          <PageNumber>
            <FontAwesomeIcon
              // onClick={() =>
              // setCurrentPage((prev) => {
              //   return prev < totalPage ? prev + 1 : prev;
              // })
              // }
              icon={faCaretRight}
            />
          </PageNumber>
        </div>
      </div>

      <div className={cx('product')}>
        <div className={cx('label')}>
          <div className={cx('select')}>
            <input type={'checkbox'} />
          </div>
          <div className={cx('image')}>
            <FontAwesomeIcon icon={faImage} />
          </div>
          <div className={cx('name')}>Tên sản phẩm</div>
          <div className={cx('id')}>Mã sản phẩm</div>
          <div className={cx('category')}>Danh mục</div>
          <div className={cx('price')}>Giá</div>
          <div className={cx('date')}>Ngày thêm</div>
        </div>

        {loading && <Spinner />}
        {error && <h3>Error</h3>}
        {product &&
          product.products &&
          product.products.length > 0 &&
          product.products.map((item) => <ProductItem key={item.id} data={item} />)}
        <div className={cx('page')}>
          <PageNumber>
            <FontAwesomeIcon
              onClick={() =>
                setCurrentPage((prev) => {
                  return prev > 1 ? prev - 1 : prev;
                })
              }
              icon={faCaretLeft}
            />
          </PageNumber>
          {numbersPage.map((numberPage) => {
            return (
              <PageNumber
                key={numberPage}
                currentPage={currentPage}
                // onClick={() => setCurrentPage(numberPage)}
              >
                {numberPage}
              </PageNumber>
            );
          })}
          <PageNumber>
            <FontAwesomeIcon
              // onClick={() =>
              // setCurrentPage((prev) => {
              //   return prev < totalPage ? prev + 1 : prev;
              // })
              // }
              icon={faCaretRight}
            />
          </PageNumber>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
