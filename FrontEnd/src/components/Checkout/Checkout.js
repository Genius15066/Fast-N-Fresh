import { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loggedInUser] = useContext(UserContext)
    useEffect(() => {
        const url = `https://fast-n-fresh-15.herokuapp.com/products/${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])
    console.log(product)
    const { name, weight, price,imageURL  } = product
    const history = useHistory();
    const handleCheckOut = (product) => {
        const orderDetails = {
            ...loggedInUser,
            displayName:name,
            weight:weight,
            price:price,
            image:imageURL,
            orderTime: new Date(),

        }

        const url = `https://fast-n-fresh-15.herokuapp.com/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => console.log('server side response', res))


        const checkOutUrl = `/checkout/${product._id}`
        history.push(checkOutUrl)
    }
    return (
        <div>
            <h2 className="text-center text-primary pb-3">CheckOut</h2>
            <div className="d-flex justify-content-between">
                <h6>Description</h6>
                <h6>Quantity</h6>
                <h6>Price</h6>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <h6>{name}</h6>
                <h6>{weight}</h6>
                <h6>৳ {price}</h6>
            </div>

            <div className=" d-flex justify-content-end" >
                <button onClick={() => { handleCheckOut(product) }} className="btn btn-success mt-3" type="submit">
                    Checkout
            </button>
            </div>
        </div>
    );
};

export default Checkout;