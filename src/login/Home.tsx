import React, { useState } from 'react';
import LoginWithGoogle from './LoginWithGoogle';
function Home() {
    const [isLogin, setIsLogin] = useState(false);

    function handleClick() {
        setIsLogin((login) => !login);
    }
    return (
        <div className="flex flex-col items-center justify-center h-full  ">
            <div className="bg-secondary_dark p-10 flex-col space-y-4 flex items-stretch rounded-2xl ">
                <div className="flex flex-col items-center pb-2">
                    <h1 className="text-xl font-bold ">Super Chat</h1>
                    <img
                        src="/src/assets/logo.png"
                        alt=""
                        className="bg-blend-color-dodge"
                    />
                    <div className="text-sm mx-auto">Continue with </div>
                </div>

                <LoginWithGoogle />

                <div className="mx-auto text-sm ">- OR -</div>
                {isLogin && (
                    <div className="flex  flex-col w-full space-y-2">
                        <input
                            className="bg-gray-200 py-2 px-3 rounded-lg "
                            type="text"
                            placeholder="email"
                        />
                        <input
                            className="bg-gray-200 py-2 px-3 rounded-lg "
                            type="password"
                            placeholder="password"
                        />
                        <button className="py-2 bg-green-600 text-white px-3 rounded-xl hover:bg-green-500  ">
                            Login
                        </button>
                        <button className="text-sm" onClick={handleClick}>
                            Not Registered?{' '}
                            <span className="text-blue-700"> Signup</span>
                        </button>
                    </div>
                )}

                {!isLogin && (
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
                        <button className="py-2  bg-green_accent px-3 rounded-xl hover:bg-green_accent/90 ">
                            Sign Up
                        </button>
                        <button className="text-sm mt-1" onClick={handleClick}>
                            Already a user?{' '}
                            <span className="text-blue-700"> Login</span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Home;
