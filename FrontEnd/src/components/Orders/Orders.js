import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderProduct from '../OrderProduct/OrderProduct';

const Orders = () => {
    const [loggedInUser] = useContext(UserContext)
    const [orderItem, setOrderItem] = useState([])
    useEffect(() => {
        fetch('https://fast-n-fresh-15.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrderItem(data))
    }, [loggedInUser.email])
    return (
        <div>
            {
                orderItem.map(item => <OrderProduct key={item._id} item={item} />)
            }
        </div>
    );
};

export default Orders;