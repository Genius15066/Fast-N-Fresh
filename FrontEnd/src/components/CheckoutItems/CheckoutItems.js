import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './CheckoutItems.css'

const CheckoutItems = () => {
    return (
        <div className="google-btn d-flex flex-column">
           <FontAwesomeIcon className="mx-1 text-white bg-success p-4 icon" size="6x" icon={faCheck} />
           <br/>
           <h2>CheckOut Successful</h2>
        </div>
    );
};

export default CheckoutItems;