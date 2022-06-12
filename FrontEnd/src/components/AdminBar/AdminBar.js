import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEdit, faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'react-bootstrap';
import { Link} from "react-router-dom";

const AdminBar = () => {
 
    return (
        <Col md={3} className="admin-page-left">
            <div className="d-flex flex-column text-center">
                <Link to="/admin/addProduct" className="text-white" style={{ textDecoration: 'none' }}> <FontAwesomeIcon icon={faPlus} className="text-white mx-2" />Add Product</Link>
                <Link to="/admin/manageProduct" className="text-white " style={{ textDecoration: 'none' }} ><FontAwesomeIcon icon={faGripHorizontal} className="text-white mx-2" /> Manage Product</Link>
                <Link to="/admin/editProduct" className="text-white " style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faEdit} className="text-white mx-2" />Edit Product</Link>
            </div>
        </Col>
    );
};

export default AdminBar;