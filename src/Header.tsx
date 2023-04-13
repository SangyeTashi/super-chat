import { User } from 'firebase/auth';
import image from './assets/logo.png';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import HeaderDropdown from './components/HeaderDropdown';
import blankProfilePhoto from './assets/blankPhoto.jpg';

interface Props {
    user: User;
}
const Header = ({ user: { displayName, photoURL } }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="flex justify-between items-center p-3 bg-secondary_dark text-white">
            <div className="flex items-center">
                <img src={image} className="h-10" alt="" />
                <h1 className="p-1 text-lg font-bold">Super Chat</h1>
            </div>

            <div className="flex items-center space-x-4 ">
                <div className="relative">
                    {!showDropdown && (
                        <FaChevronDown
                            size={15}
                            className="rounded-full hover:bg-tertiary_dark box-content p-2  cursor-pointer "
                            onClick={() => {
                                setShowDropdown(!showDropdown);
                            }}
                        />
                    )}
                    {showDropdown && (
                        <>
                            <FaChevronUp
                                size={15}
                                className="rounded-full hover:bg-tertiary_dark box-content p-2  cursor-pointer "
                                onClick={() => {
                                    setShowDropdown(!showDropdown);
                                }}
                            />
                            <HeaderDropdown />
                        </>
                    )}
                </div>
                <h2 className="">{displayName}</h2>

                <img
                    src={photoURL ? photoURL : blankProfilePhoto}
                    className="w-10 rounded-full"
                />
            </div>
        </div>
    );
};
export default Header;
