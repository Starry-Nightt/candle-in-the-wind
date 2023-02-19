import appAPI from '../utils/appAPI';
class OrderService {
  // User lấy danh sách những order đã đặt mua
  getMyOrder = () => {
    return appAPI.get('order/getOrder', { withCredentials: true });
  };

  // Trước khi checkout show ra những voucher mà người dùng có để lựa chọn bằng api getUserVoucher
  // Truyền vào object data => đã destructuring thành ID_Voucher
  checkout = ({ ID_Voucher }) => {
    return appAPI.post(
      '/order/checkout',
      {
        ID_Voucher: ID_Voucher,
      },
      { withCredentials: true },
    );
  };
}

export default new OrderService();
