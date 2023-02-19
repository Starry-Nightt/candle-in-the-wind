import React from 'react';
import { useDispatch } from 'react-redux';
import { createProductAsync } from '~/redux/product/product.thunk';
import FormProduct from '../form-product/form-product';

function CreateProductPage() {
  const dispatch = useDispatch();

  const onCreateProduct = (data) => {
    dispatch(createProductAsync(data));
  };

  return (
    <div>
      <h4 className="section-title text-3xl">Thêm mới sản phẩm</h4>
      <FormProduct handleSubmitForm={onCreateProduct} title={'Tạo sản phẩm'} />
    </div>
  );
}

export default CreateProductPage;
