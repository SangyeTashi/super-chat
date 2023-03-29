import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../firebase';

const Login = () => {
    function handleClick() {
        signInWithPopup(auth, provider);
    }
    return (
        <div className="App">
            <button onClick={handleClick}>Login with google</button>
        </div>
    );
};
export default Login;
