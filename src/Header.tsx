import { User } from 'firebase/auth';
import image from './assets/logo.png';
import { FaChevronDown } from 'react-icons/fa';

interface Props {
    user: User;
}
const Header = ({ user: { displayName, uid, photoURL } }: Props) => {
    return (
        <div className="flex justify-between items-center p-3 bg-secondary_dark text-white">
            <div className="flex items-center">
                <img src={image} className="h-10" alt="" />
                <h1 className="p-1 text-lg font-bold">Super Chat</h1>
            </div>

            <div className="flex items-center space-x-4 ">
                <FaChevronDown
                    size={15}
                    className="rounded-full hover:bg-tertiary_dark box-content p-2  cursor-pointer "
                />
                <h2 className="">{displayName}</h2>
                {photoURL && (
                    <img src={photoURL} className="w-10 rounded-full" />
                )}
            </div>
        </div>
    );
};
export default Header;
