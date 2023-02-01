import React from 'react';
import style from './input.module.scss';
function Input({
  label,
  formControl,
  type,
  placeholder,
  register,
  required,
  minLength,
  maxLength,
  pattern,
  error,
}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(formControl, { required, minLength, maxLength, pattern })}
      />
      <p className={`${style.error}`}>{error?.message}</p>
    </>
  );
}

export default Input;
