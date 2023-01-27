import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadProduct } from '~/redux/product/product.thunk';

function Products() {
  const productState = useSelector((state) => state.product);
  const { loading, product, error } = productState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProduct());
  }, []);

  return (
    <>
      <div>
        <h2>Product List</h2>
        {loading && <h3>Loading...</h3>}
        {error && <h3>Error</h3>}
        {product &&
          product.products &&
          product.products.length > 0 &&
          product.products.map((item) => <p key={item.id}>{item.title}</p>)}
      </div>
    </>
  );
}

export default connect()(Products);
