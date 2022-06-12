import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './OrderProduct.css'

const OrderProduct = (props) => {
    console.log(props);
    const { name, displayName, price, weight, email, image, orderTime } = props.item
    return (
        <div>
            <Row className="product-style p-2">
                <Col md={3}>
                    <img className="product-photo" src={image} alt="" />
                </Col>

                <Col md={4} className="text-center pt-md-4 mb-3">
                    <h5 className="pb-2 text-success">Order Product Info</h5>
                    <h6>Product Name : {displayName}</h6>
                    <h6>Quantity : {weight}</h6>
                    <h6>Price: {price}</h6>
                </Col>
                <Col md={5} className="text-center pt-md-4">
                    <h5 className="text-center text-success">Customer Details</h5>
                    <h6>Name: {name}</h6>
                    <h6>Email: {email} </h6>
                    <h6>Order Time: {orderTime}</h6>
                   
                </Col>
               
            </Row>
            <hr className="line"/>
        </div>
    );
};

export default OrderProduct;