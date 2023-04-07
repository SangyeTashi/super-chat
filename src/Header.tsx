import { User } from 'firebase/auth';
import image from './assets/logo.png';
interface Props {
    user: User;
}
const Header = ({ user: { displayName, uid, photoURL } }: Props) => {
    return (
        <div className="flex justify-between items-center border-b-slate-900  border p-2 bg-purple-800 text-white">
            <div className="flex items-center">
                <img src={image} className="h-10" alt="" />
                <h1 className="p-1 text-lg font-bold">Super Chat</h1>
            </div>

            <div className="flex items-center space-x-4 ">
                <h2 className="">{displayName}</h2>
                {photoURL && (
                    <img src={photoURL} className="w-12 rounded-full" />
                )}
            </div>
        </div>
    );
};
export default Header;
