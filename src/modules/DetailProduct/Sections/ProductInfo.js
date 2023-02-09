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
                {/* <Descriptions.Item label="Giá">{Product.price}</Descriptions.Item>
                <Descriptions.Item label="Đã bán">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Lượt xem">{Product.views}</Descriptions.Item>
                <Descriptions.Item label="Mô tả sản phẩm">{Product.description}</Descriptions.Item> */}

                <Descriptions.Item label="Giá">150.000 VNĐ</Descriptions.Item>
                <Descriptions.Item label="Đã bán">162</Descriptions.Item>
                <Descriptions.Item label="Lượt xem">532</Descriptions.Item>
                <Descriptions.Item label="Mô tả sản phẩm" span="3">
Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</Descriptions.Item>
                <br />
                <br />
                <br />
                <Descriptions.Item span="6" contentStyle={{display: 'block'}}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size="large" shape="round" type="primary" 
                            onClick
                        >
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                </Descriptions.Item>
                
            </Descriptions>
        </div>
    )
}

export default ProductInfo