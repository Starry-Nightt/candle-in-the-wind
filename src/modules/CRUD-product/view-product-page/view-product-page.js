import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadProductByCategory } from '~/redux/product/product.thunk';
import Spinner from '~/shared/components/spinner/spinner';
import ProductTable from '../product-table/product-table';
import Paginator from '~/shared/components/paginator/paginator';

const PRODUCT_PER_PAGE = 4;

function ViewProductPage() {
  const navigate = useNavigate();
  const { loading, product, error } = useSelector((state) => state.product);
  const [totalPage, setTotalPage] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [displayProduct, setDisplayProduct] = useState([]);
  const dispatch = useDispatch();

  const onCreateProduct = () => {
    navigate('/admin/product/create');
  };

  useEffect(() => {
    dispatch(loadProductByCategory());
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    if (product) {
      setCurrentPage(1);
      const prodList = [];
      for (let i = 0; i < PRODUCT_PER_PAGE && i < product?.length; i++) {
        prodList.push(product[i]);
      }
      setDisplayProduct(prodList);
    }
    setTotalPage(product?.length ? Math.ceil(product?.length / PRODUCT_PER_PAGE) : 1);
  }, [product]);

  useEffect(() => {
    if (product) {
      const tmp = (currentPage - 1) * PRODUCT_PER_PAGE;
      const prodList = [];
      for (let i = tmp; i < tmp + PRODUCT_PER_PAGE && i < product?.length; i++) {
        prodList.push(product[i]);
      }
      setDisplayProduct(prodList);
    }
  }, [currentPage]);

  return (
    <>
      <div className="flex justify-end">
        <button className="create-button" onClick={onCreateProduct}>
          Tạo sản phẩm
        </button>
      </div>
      <div>
        {error && <h3>Error</h3>}
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ProductTable products={displayProduct} />
            <Paginator
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberPage={totalPage}
            />
          </>
        )}
      </div>
    </>
  );
}

export default ViewProductPage;
