import { auth } from '../firebase';
import blankPhoto from './assets/blankPhoto.jpg';
import { useRecoilState } from 'recoil';
import { FaEdit, FaArrowLeft } from 'react-icons/fa';
import { pagesStateAtom } from './atoms/pagesStatesAtom';
const UserProfile = () => {
    const [pageState, setPageState] = useRecoilState(pagesStateAtom);
    return (
        <>
            {auth.currentUser && (
                <div className=" mt-10 flex items-center flex-col justify-center">
                    <FaArrowLeft
                        size={20}
                        className="absolute top-6 left-6 cursor-pointer "
                        onClick={() => {
                            setPageState('CHATPAGE');
                        }}
                    />
                    <div className="mb-2 relative">
                        <img
                            className="w-32  rounded-full"
                            src={
                                auth.currentUser.photoURL
                                    ? auth.currentUser.photoURL
                                    : blankPhoto
                            }
                            alt=""
                        />
                        <FaEdit
                            size={25}
                            className="absolute rounded-md bottom-1 right-1 bg-primary_dark p-1"
                        />
                    </div>
                    {auth.currentUser.displayName && (
                        <div className="text-2xl">
                            {auth.currentUser.displayName}
                        </div>
                    )}
                    <div>{auth.currentUser.email}</div>
                </div>
            )}
        </>
    );
};
export default UserProfile;
