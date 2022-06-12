import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';

const ManageProductItem = (props) => {
    const { name, weight, price, _id } = props.product
    const deleteProduct = (id) => {
        const url = `http://localhost:8080/deleteProduct/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div className="d-flex justify-content-between text-center">
            <Col> <p>{name}</p></Col>
            <Col><p>{weight}</p></Col>
            <Col><p>{price}</p></Col>
            <Col> <button onClick={() => deleteProduct(_id)}><FontAwesomeIcon className="mx-1 text-danger" icon={faTrashAlt} /></button></Col>
        </div>
    );
};

export default ManageProductItem;