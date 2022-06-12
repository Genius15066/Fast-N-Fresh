import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Headers.css'
import { UserContext } from '../../App';

const Headers = () => {
    const [loggedInUser] = useContext(UserContext)
    let isSignedInUser=false;
    if(loggedInUser.name){
        isSignedInUser=true
    } 
    const {photoURL}=loggedInUser

    return (
        <div className="header">

            <Navbar expand="lg">
                <Navbar.Brand className="title text-success" href="/home">Easy Buys</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="d-md-flex  justify-content-md-end">
                    <Nav className="d-flex justify-content-sm-center ">
                        <Link className="px-md-4  py-md-2 mb-2 mb-md-0 link-nav" to="/home">Home</Link>
                        <Link className="px-md-4  py-md-2 mb-2 mb-md-0 link-nav" to="/orders">Orders</Link>
                        <Link className="px-md-4  py-md-2 mb-2 mb-md-0 link-nav" to="/admin">Admin</Link>
                        <Link className="px-md-4  py-md-2 mb-2 mb-md-0 link-nav" to="/deals">Deals</Link>
                        {
                             isSignedInUser? <Link className="px-md-4  py-md-2 mb-2 mb-md-0 link-nav" to="/login"><img className="sign-in-image" src={photoURL} alt=""/></Link> :
                            <Link className="px-md-4  py-md-2 mb-2 mb-md-0 link-nav" to="/login">LogIn</Link>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Headers;
