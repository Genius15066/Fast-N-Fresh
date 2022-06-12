import React from 'react';
import { Row } from 'react-bootstrap';
import './Admin.css'
import AdminBar from '../AdminBar/AdminBar';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import EditProduct from '../EditProduct/EditProduct';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Admin = () => {
    return (
        <Row className="pt-2 admin-page">
            <Router>
                <Switch>
                    <Route exact path="/admin">
                        <AdminBar />
                        <AddProduct />
                    </Route>
                    <Route path="/admin/addProduct">
                        <AdminBar />
                        <AddProduct />
                    </Route>
                    <Route path="/admin/manageProduct">
                        <AdminBar />
                        <ManageProduct />
                    </Route>
                    <Route path="/admin/editProduct">
                        <AdminBar />
                        <EditProduct />
                    </Route>

                </Switch>
            </Router>



        </Row>
    );
};

export default Admin;