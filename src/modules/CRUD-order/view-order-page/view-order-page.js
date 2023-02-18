import React from 'react';
import { useNavigate } from 'react-router-dom';

function ViewOrderPage() {
  const navigate = useNavigate();

  const onCreateOrder = () => {
    navigate('/admin/order/create');
  };

  return (
    <>
      <div className="flex justify-end">
        <button className="create-button" onClick={onCreateOrder}>
          Tạo hóa đơn
        </button>
      </div>
      <div>ViewOrderPage</div>
    </>
  );
}

export default ViewOrderPage;
