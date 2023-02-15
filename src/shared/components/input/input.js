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
  value,
  radioButton,
}) {
  return (
    <>
      <section className={radioButton ? `${style.control}` : ''}>
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(formControl, { required, minLength, maxLength, pattern })}
          value={value}
        />
      </section>
      <p className={`${style.error}`}>{error?.message}</p>
    </>
  );
}

export default Input;
