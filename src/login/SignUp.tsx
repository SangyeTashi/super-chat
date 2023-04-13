import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { loginPageState } from '../atoms/loginFormState';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

const SignUp = () => {
    const setLoginPageState = useSetRecoilState(loginPageState);
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function handleConfirmationChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setConfirmPassword(event.target.value);
    }

    function handleClick() {
        emailRef.current &&
            password &&
            createUserWithEmailAndPassword(emailRef.current.value, password);
    }
    return (
        <div className="flex  flex-col w-full space-y-2">
            <input
                ref={emailRef}
                className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                type="email"
                placeholder="email"
            />
            <input
                value={password}
                className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                type="password"
                placeholder="password"
                onChange={handleChange}
            />
            <input
                value={confirmPassword}
                className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                type="password"
                placeholder="confirm password"
                onChange={handleConfirmationChange}
            />
            <button
                className="py-2  bg-green_accent px-3 rounded-xl hover:bg-green_accent/90 disabled:bg-tertiary_dark"
                onClick={handleClick}
                disabled={password !== confirmPassword}
            >
                {password !== confirmPassword && (
                    <div>Passwords do not match!</div>
                )}
                {password === confirmPassword && 'Sign Up'}
            </button>
            <button
                className="text-sm mt-1"
                onClick={() => {
                    setLoginPageState('LOGIN');
                }}
            >
                Already a user? <span className="text-blue-700"> Login</span>
            </button>
        </div>
    );
};
export default SignUp;
