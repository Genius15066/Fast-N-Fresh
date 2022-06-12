import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    console.log(loggedInUser)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result.user)
                const{displayName,email,photoURL} = result.user;
                const signedInUser={
                    name:displayName,
                    email:email,
                    photoURL:photoURL
                }
                setLoggedInUser(signedInUser)
                history.replace(from);
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="google-btn" >
            <button className="text-success  btn-lg" onClick={handleGoogleSignIn}><FontAwesomeIcon className="mx-3" icon={faGoogle} />Sign with google</button>
        </div>
    );
};

export default Login;