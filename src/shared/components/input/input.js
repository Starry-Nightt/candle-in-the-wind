import React from 'react';
import style from './input.module.scss';

function Input({
  label,
  formControl,
  type,
  accept,
  multiple,
  placeholder,
  register,
  required,
  minLength,
  maxLength,
  valueAsNumber,
  pattern,
  error,
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        accept={accept}
        multiple={multiple}
        placeholder={placeholder}
        {...register(formControl, { required, minLength, maxLength, valueAsNumber, pattern })}
      />
      <p className={`${style.error}`}>{error?.message}</p>
    </>
  );
}

export default Input;
