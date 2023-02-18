import React from 'react';
import { useNavigate } from 'react-router-dom';

function ViewProductPage() {
  const navigate = useNavigate();

  const onCreateProduct = () => {
    navigate('/admin/product/create');
  };
  return (
    <>
      <div className="flex justify-end">
        <button className="create-button" onClick={onCreateProduct}>
          Tạo sản phẩm
        </button>
      </div>
      <div>ViewProductPage</div>
    </>
  );
}

export default ViewProductPage;
