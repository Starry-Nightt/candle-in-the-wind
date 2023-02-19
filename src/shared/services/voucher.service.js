import appAPI from '../utils/appAPI';
class VoucherService {
  //  User lấy những voucher mà mình có thể sử dụng
  getUserVoucher = () => {
    return appAPI().get(`voucher/getUserVoucher`, { withCredentials: true });
  };

  // Chỉ admin có quyền get all voucher
  getAllVoucher = () => {
    return appAPI().get('voucher/getAllVoucher', { withCredentials: true });
  };

  // Truyền vào object data => đã destructuring thành id
  deleteVoucher = ({ id }) => {
    return appAPI().delete('voucher/deleteVoucher', {
      data: { ID_Voucher: id },
      withCredentials: true,
    });
  };

  // Có 4 loại rank: copper, silver, gold, platinum
  createVoucher = ({ name, rank, value }) => {
    return appAPI().post(
      'voucher/createVoucher',
      {
        name,
        rank,
        value,
      },
      {
        withCredentials: true,
      },
    );
  };
}

export default new VoucherService();
