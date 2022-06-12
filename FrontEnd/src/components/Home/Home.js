import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [products._id])
    console.log(products)

    return (
        <Row>
            {
                products.length===0 && <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            }
            {
                products.map(product => <Product key={product._id} product={product} />)
            }
        </Row>
    );
};

export default Home;