import { useRef } from 'react';
import { auth } from '../../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { loginPageState } from '../atoms/loginFormState';

const LoginWithEmail = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const setLoginPageState = useSetRecoilState(loginPageState);

    function handleClick() {
        emailRef.current &&
            passwordRef.current &&
            signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current?.value
            );
    }

    return (
        <>
            {loading && <h1>Loading</h1>}
            <div className="flex  flex-col w-full space-y-2">
                <input
                    ref={emailRef}
                    className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                    type="email"
                    placeholder="email"
                />
                <input
                    ref={passwordRef}
                    className="bg-tertiary_dark py-2 px-3 rounded-lg focus:outline-none"
                    type="password"
                    placeholder="password"
                />

                {error && <h2>{error.code}</h2>}
                <button
                    className="py-2  bg-green_accent px-3 rounded-xl hover:bg-green_accent/90 "
                    onClick={handleClick}
                >
                    Login
                </button>
                <button
                    className="text-sm mt-1"
                    onClick={() => {
                        setLoginPageState('SIGNUP');
                    }}
                >
                    Not Registered?{' '}
                    <span className="text-blue-700"> Sign Up</span>
                </button>
            </div>
        </>
    );
};
export default LoginWithEmail;
