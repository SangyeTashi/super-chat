import { useRef } from 'react';
import { auth } from '../../firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { loginPageState } from '../atoms/loginFormState';
import Button from '../components/Button';

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

                <Button
                    isLoading={loading}
                    handleClick={handleClick}
                    text="Login"
                />
                {error && (
                    <h2 className="my-auto text-green_highlight text-center">
                        {error.code + ' !'}
                    </h2>
                )}

                <button
                    className="pt-2 mt-1"
                    onClick={() => {
                        setLoginPageState('SIGNUP');
                    }}
                >
                    Not Registered?{' '}
                    <span className="text-green_accent"> Sign Up</span>
                </button>
            </div>
        </>
    );
};
export default LoginWithEmail;
