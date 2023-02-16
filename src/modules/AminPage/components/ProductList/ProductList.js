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
import Spinner from '~/shared/components/spinner/spinner';
import PageNumber from '~/modules/Products/PageNumber/PageNumber';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {
  setCurrentPage,
  setNumbersPage,
  setSearchValue,
  setSortFilter,
  setTotalPage,
} from '~/redux/filter/filter.action';
import NotFoundProduct from '~/modules/Products/NotFoundProduct/NotFoundProduct';
import Button from '~/shared/components/Button';

const cx = classNames.bind(style);

function ProductList() {
  const { product, loading, error } = useSelector((state) => state.product);
  const { numbersPage, currentPage, totalPage, sortFilter, priceRange, searchValue } = useSelector(
    (state) => state.filter,
  );
  const [category, setCategory] = useState(categoryList[0].path);
  const [deleteItem, setDeleteItem] = useState([]);
  const [pageValue, setPageValue] = useState(currentPage);
  const [inputWidth, setInputWidth] = useState(12);
  const dispatch = useDispatch();

  function addDeleteItem(item) {
    let arr = new Set(deleteItem);
    item.forEach((sub) => arr.add(sub));
    setDeleteItem([...arr]);
  }

  function removeDeleteItem(item) {
    let arr = new Set(deleteItem);
    item.forEach((sub) => arr.delete(sub));
    setDeleteItem([...arr]);
  }

  useEffect(() => {
    console.log(deleteItem);
  }, [deleteItem]);

  useEffect(() => {
    dispatch(loadProduct(category.slice(10), currentPage, sortFilter, priceRange, searchValue));
  }, [category, currentPage, sortFilter, priceRange, searchValue]);

  useEffect(() => {
    if (product) {
      let total;
      total = Math.ceil(product.total / 30);
      if (Number.isNaN(total)) dispatch(setTotalPage(1));
      else dispatch(setTotalPage(total));
    }
  }, [product]);

  useEffect(() => {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i > totalPage) break;
      else arr.push(i);
    }
    dispatch(setNumbersPage(arr));
  }, [totalPage]);

  useEffect(() => {
    let arr = [];
    if (totalPage <= 5) return;

    if (currentPage >= numbersPage[numbersPage.length - 1] && currentPage < totalPage) {
      if (totalPage - currentPage >= 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          arr.push(i);
        }
      } else {
        for (let i = totalPage - 4; i <= totalPage; i++) {
          arr.push(i);
        }
      }
      dispatch(setNumbersPage(arr));
    } else if (currentPage <= numbersPage[0] && currentPage < totalPage) {
      if (currentPage > 2) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          arr.push(i);
        }
      } else {
        for (let i = 1; i <= 5; i++) {
          arr.push(i);
        }
      }
      dispatch(setNumbersPage(arr));
    }
  }, [currentPage]);

  useEffect(() => {
    setPageValue(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (!Number.isNaN(Number.parseInt(pageValue)))
      dispatch(setCurrentPage(Number.parseInt(pageValue)));
    if (pageValue.length > 0) setInputWidth(12 + 9 * (pageValue.length - 1));
  }, [pageValue]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('search')}>
        <span>Tìm kiếm:</span>
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              dispatch(setSearchValue(e.target.value));
              e.target.value = '';
            }
          }}
          placeholder="Nhập mã sản phẩm hoặc tên sản phẩm để tìm kiếm..."
        />
      </div>

      <div className={cx('wrap-line')}>
        <span className={cx('filter')}>
          <span>Danh mục:</span>
          <select onChange={(e) => setCategory(e.target.value)}>
            {categoryList.map((category, index) => (
              <option value={category.path} key={index}>
                {category.viewValue}
              </option>
            ))}
          </select>

          <span>Sắp xếp:</span>
          <select
            onChange={(e) => {
              dispatch(
                setSortFilter(sortFilterList.find((filter) => filter.label === e.target.value)),
              );
            }}
          >
            {sortFilterList.map((filter, index) => (
              <option value={filter.label} key={index}>
                {filter.label}
              </option>
            ))}
          </select>
          {deleteItem.length > 0 ? <span>Đã chọn: {deleteItem.length} sản phẩm</span> : null}
          {deleteItem.length > 0 && (
            <Button className={cx('delete-btn')} rounded type="pOutline">
              Xóa sản phẩm
            </Button>
          )}
        </span>

        <div className={cx('page')}>
          <span className={cx('page-label')}>
            Trang{' '}
            <input
              className={cx('page-input')}
              value={pageValue}
              style={{ width: inputWidth }}
              onChange={(e) => {
                let tmp = e.target.value;
                let lastChar = tmp[tmp.length - 1];
                if (
                  tmp === '' ||
                  (tmp[0] !== '0' &&
                    lastChar <= '9' &&
                    lastChar >= '0' &&
                    Number.parseInt(tmp) <= totalPage)
                )
                  setPageValue(tmp);
              }}
            />
            / {totalPage}
          </span>
          <PageNumber noneMargin={true}>
            <FontAwesomeIcon
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
              icon={faCaretLeft}
            />
          </PageNumber>
          <PageNumber noneMargin={true}>
            <FontAwesomeIcon
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
              icon={faCaretRight}
            />
          </PageNumber>
        </div>
      </div>

      <div className={cx('product')}>
        <div className={cx('label')}>
          <div className={cx('select')}>
            <input
              type={'checkbox'}
              checked={
                product && product.products
                  ? product.products.every((data) => deleteItem.includes(data.id))
                  : false
              }
              onChange={(e) => {
                if (e.target.checked) {
                  addDeleteItem(product.products.map((data) => data.id));
                } else {
                  removeDeleteItem(product.products.map((data) => data.id));
                }
              }}
            />
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
        {!totalPage && <NotFoundProduct />}
        {product &&
          product.products &&
          product.products.length > 0 &&
          product.products.map((item) => (
            <ProductItem
              key={item.id}
              data={item}
              addDeleteItem={addDeleteItem}
              removeDeleteItem={removeDeleteItem}
              deleteItem={deleteItem}
            />
          ))}
        <div className={cx('page')}>
          <PageNumber>
            <FontAwesomeIcon
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
              icon={faCaretLeft}
            />
          </PageNumber>

          {numbersPage.map((numberPage) => {
            return <PageNumber key={numberPage} numberPage={numberPage} />;
          })}

          <PageNumber>
            <FontAwesomeIcon
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
              icon={faCaretRight}
            />
          </PageNumber>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
