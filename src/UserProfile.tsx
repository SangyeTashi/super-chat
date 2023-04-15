import React from 'react';
import { auth } from '../firebase';
import blankPhoto from './assets/blankPhoto.jpg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pagesStateAtom } from './atoms/pagesStatesAtom';
const UserProfile = () => {
    const [pageState, setPageState] = useRecoilState(pagesStateAtom);
    return (
        <>
            {auth.currentUser && (
                <div>
                    <img
                        src={
                            auth.currentUser.photoURL
                                ? auth.currentUser.photoURL
                                : blankPhoto
                        }
                        alt=""
                    />
                    {auth.currentUser.displayName && (
                        <div>{auth.currentUser.displayName}</div>
                    )}
                </div>
            )}
        </>
    );
};
export default UserProfile;
