import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { AiOutlineGoogle } from 'react-icons/ai';

const LoginWithGoogle = () => {
    function handleClick() {
        signInWithPopup(auth, provider);
    }
    return (
        <button
            onClick={handleClick}
            className="p-2 flex items-center space-x-6 justify-center bg-tertiary_dark  rounded-xl outline-1 pr-8"
        >
            <img width={20} src="src/assets/google.png" alt="" />
            <span>Google</span>
        </button>
    );
};
export default LoginWithGoogle;
