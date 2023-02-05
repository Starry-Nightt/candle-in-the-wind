import appClient from '@utils/appClient';

class ProductService {
    getAllProduct = () => {
        return appClient().get('products');
    };
}

export default new ProductService();
