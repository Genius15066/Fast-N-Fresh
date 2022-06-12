import { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import ManageProductItem from '../ManageProductItem/ManageProductItem';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fast-n-fresh-15.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (

        <Col md={8} className="mt-3 mx-3">
            <h3 className="mb-5 text-center ">Manage Product</h3>
            <div className="d-flex justify-content-between mb-2 text-center">
                <Col><h6>Product Name</h6></Col>
                <Col><h6>Quantity</h6></Col>
                <Col><h6>Price</h6></Col>
                <Col><h6>Action</h6></Col>
            </div>
            {
                products.map(product => <ManageProductItem key={product._id} product={product}/>)
            }
        </Col>

    );
};

export default ManageProduct;