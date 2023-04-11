import React from 'react';
import { useSetRecoilState } from 'recoil';
import { loginPageState } from '../atoms/loginFormState';

const Login = () => {
    const setLoginPageState = useSetRecoilState(loginPageState);
    function handleClick() {
        setLoginPageState('SIGNUP');
    }
    return (
        <div className="flex  flex-col w-full space-y-2">
            <input
                className="bg-tertiary_dark py-2 px-3 rounded-lg  focus:outline-none"
                type="text"
                placeholder="email"
            />
            <input
                className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none "
                type="password"
                placeholder="password"
            />
            <button className="py-2 bg-green_accent text-white px-3 rounded-xl hover:bg-green_accent/80 ">
                Login
            </button>
            <button className="text-sm" onClick={handleClick}>
                Not Registered?
                <span className="text-green_accent ml-1"> Signup</span>
            </button>
        </div>
    );
};
export default Login;
