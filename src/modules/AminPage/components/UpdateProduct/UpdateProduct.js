import classNames from 'classnames/bind';
import ProductForm from '../ProductForm/ProductForm';
import style from './UpdateProduct.module.scss';
import ProductService from '~/shared/services/product.service';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { menu } from '../../AdminPage';
import Spinner from '~/shared/components/spinner/spinner';
import productService from '~/shared/services/product.service';

const cx = classNames.bind(style);

function UpdateProduct() {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    productService.getProduct(id).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (menu[0].subMenu.length === 3) menu[0].subMenu.pop();
  }, [location.pathname]);

  return (
    <>
      {loading && !product && <Spinner loading={loading} />}
      {!loading && product && (
        <ProductForm handleFormSubmit={ProductService.updateProduct} product={product} />
      )}
    </>
  );
}

export default UpdateProduct;
