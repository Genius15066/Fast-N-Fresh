import React from 'react';
import { Button, Card, CardDeck, Col } from 'react-bootstrap';
import {  useHistory } from "react-router-dom";
import './Product.css'

const Product = (props) => {
    const { name, imageURL,price,_id} = props.product
    const history=useHistory();
    const handleClick=(id)=>{
      const url=`/products/${id}`
      history.push(url)
    }
    return (
        <Col md={4}>
            <CardDeck className="py-3 product">
                <Card className="single-product">
                    <Card.Img variant="top" src={imageURL}/>

                    <Card.Body>
                        <Card.Title className="text-center product-name">{name}</Card.Title>                      
                    </Card.Body>

                    <Card.Footer className="d-flex justify-content-between align-items-center">
                        <Card.Text><h4 className="text-primary">৳{price}</h4></Card.Text>
                        <Button onClick={()=>handleClick(_id)}  className="text-white">Buy Now</Button>
                    </Card.Footer>

                </Card>
            </CardDeck>
        </Col>
    );
};

export default Product;