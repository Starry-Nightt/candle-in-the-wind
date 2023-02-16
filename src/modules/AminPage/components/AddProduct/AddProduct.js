import classNames from 'classnames/bind';
import ProductForm from '../ProductForm/ProductForm';
import style from './AddProduct.module.scss';
import ProductService from '~/shared/services/product.service';

const cx = classNames.bind(style);

function AddProduct() {
  return (
    <>
      <ProductForm addProduct={ProductService.addProduct} />
    </>
  );
}

export default AddProduct;
