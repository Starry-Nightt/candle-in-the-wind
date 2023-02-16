import classNames from 'classnames/bind';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '~/shared/components/input/input';
import style from './ProductForm.module.scss';
import { requiredField, minLengthField, maxLengthField, valueAsNumber } from '@utils/validator';
import { categoryList } from '~/layout/header/components/category/category';
import Button from '~/shared/components/Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductForm({ handleFormSubmit, product }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: product
      ? {
          title: product.title,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
          image: product.image,
        }
      : {
          title: '',
          price: '',
          quantity: '',
          description: '',
          image: null,
        },
  });

  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const submit = (data) => {
    console.log(data);
    handleFormSubmit(data)
      .then((res) => {
        product
          ? alert('Cập nhật thông tin sản phẩm thành công')
          : alert('Thêm sản phẩm thành công');
        navigate('/admin/product/view');
      })
      .catch((error) => {
        const status = error?.response?.status;
        if (status === 429) setErrorMsg('No server response');
        else if (status === 400) setErrorMsg('Lỗi vui lòng thử lại');
        else setErrorMsg('Vui lòng kiểm tra kết nối internet');
      });
  };

  return (
    <form className={cx('wrapper')} onSubmit={handleSubmit(submit)}>
      {errorMsg && errorMsg.length && <p className={`${style.alert}`}>{errorMsg}</p>}
      <div className={cx('formGroup')}>
        <div className={cx('label')}>Tên sản phẩm: </div>
        <Input
          formControl="title"
          placeholder="Tên sản phẩm"
          register={register}
          required={requiredField()}
          minLength={minLengthField(1)}
          maxLength={maxLengthField(50)}
          error={errors.title}
        />
      </div>

      <div className={cx('formGroup')}>
        <div className={cx('label')}>Danh mục: </div>
        <select {...register('category')}>
          {categoryList.map((category, index) =>
            category.viewValue !== 'Tất cả' ? (
              <option key={category.viewValue} value={index}>
                {category.viewValue}
              </option>
            ) : null,
          )}
        </select>
      </div>

      <div className={cx('formGroup')}>
        <div className={cx('label')}>Giá: </div>
        <Input
          formControl="price"
          placeholder="Giá"
          register={register}
          required={requiredField()}
          minLength={minLengthField(1)}
          error={errors.price}
        />
      </div>

      <div className={cx('formGroup')}>
        <div className={cx('label')}>Số lượng: </div>
        <Input
          type="number"
          formControl="quantity"
          placeholder="Số lượng"
          register={register}
          required={requiredField()}
          error={errors.quantity}
        />
      </div>

      <div className={cx('formGroup')}>
        <div className={cx('label')}>Mô tả: </div>
        <Input
          formControl="description"
          placeholder="Mô tả"
          register={register}
          required={requiredField()}
          minLength={minLengthField(1)}
          error={errors.description}
        />
      </div>

      <div className={cx('formGroup')}>
        <div className={cx('label')}>Ảnh: </div>
        <Input
          type="file"
          accept="image/*"
          multiple="multiple"
          formControl="image"
          register={register}
          required={requiredField()}
          error={errors.image}
        />
      </div>

      <Button type="primary" className={cx('submitButton')}>
        {product ? 'Cập nhật thông tin' : 'Thêm sản phẩm'}
      </Button>
    </form>
  );
}

export default ProductForm;
