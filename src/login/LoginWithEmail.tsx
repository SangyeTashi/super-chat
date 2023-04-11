import React from 'react';
import { emailProvider } from '../../firebase';

const LoginWithEmail = () => {
    function handleClick() {}

    return (
        <>
            <div className="flex  flex-col w-full space-y-2">
                <input
                    className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                    type="text"
                    placeholder="email"
                />
                <input
                    className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                    type="password"
                    placeholder="password"
                />
                <input
                    className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                    type="password"
                    placeholder="confirm password"
                />
                <button
                    className="py-2  bg-green_accent px-3 rounded-xl hover:bg-green_accent/90 "
                    onClick={handleClick}
                >
                    Sign Up
                </button>
                <button className="text-sm mt-1" onClick={()=>{
                    
                }}>
                    Already a user?{' '}
                    <span className="text-blue-700"> Login</span>
                </button>
            </div>
        </>
    );
};
export default LoginWithEmail;
