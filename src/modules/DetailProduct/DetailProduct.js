import React, { useEffect, useState } from 'react'
import { Axios } from 'axios'
import { Row, Col } from 'antd'
import ProductImage from './Sections/ProductImage'
import ProductInfo from './Sections/ProductInfo'

// function DetailProduct(props) {

//     const productId = props.match.params.productId
//     const [Product, setProduct] = useState([])

//     useEffect(() => {
//         Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
//             .then(response => {
//                 setProduct(response.data[0])
//             })      

    function DetailProduct(props) {  //temp code 
        const [Product, setProduct] = useState([])
        useEffect(() => {       //temp code 
    }, [])

    return (
        <div className="postPage" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>{ProductImage.title}</h1>
            </div>

            <br />

            <Row gutter={[16, 16]}>
                <Col lg={12} sm={24}>
                    <ProductImage detail={Product} />
                </Col>
                <Col lg={12} sm={24}>
                    <ProductInfo detail={Product} />
                </Col>
            </Row>          
        </div>
    )
}

export default DetailProduct