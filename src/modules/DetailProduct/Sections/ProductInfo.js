import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd'
import './ProductInfo.scss'

function ProductInfo(props) {

    const [Product, setProduct] = useState([])

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    return (
        <div>
            <Descriptions title="Thông tin sản phẩm">
                <Descriptions.Item label="Giá">{Product.price}</Descriptions.Item>
                <Descriptions.Item label="Đã bán">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Lượt xem">{Product.views}</Descriptions.Item>
                <Descriptions.Item label="Mô tả sản phẩm">{Product.description}</Descriptions.Item>
                <br />
                <br />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button size="large" shape="round" type="primary"
                        onClick
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </Descriptions>
        </div>
    )
}

export default ProductInfo