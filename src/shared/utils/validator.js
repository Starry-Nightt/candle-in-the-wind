const requiredField = () => {
  return 'Trường này là bắt buộc';
};

const minLengthField = (value) => {
  return {
    value,
    message: `Tối thiểu ${value} kí tự`,
  };
};

const maxLengthField = (value) => {
  return {
    value,
    message: `Tối đa ${value} kí tự`,
  };
};

const emailField = () => {
  return '/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/';
};

export { requiredField, minLengthField, maxLengthField, emailField };
