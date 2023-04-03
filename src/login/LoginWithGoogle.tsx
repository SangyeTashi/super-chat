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
            className="p-2 flex items-center space-x-4 justify-center bg-white outline outline-gray-900 rounded-xl outline-1 "
        >
            <img width={20} src="src/assets/google.png" alt="" />
            <span>Google</span>
        </button>
    );
};
export default LoginWithGoogle;
