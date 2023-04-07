import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useRecoilState } from 'recoil';
import { lastSenderIdState } from './atoms/lastSenderId';
import { useEffect, useState } from 'react';
type MessageProps = {
    message: string;
    senderId?: string;
    photoURL: string;
    senderName: string;
    showPic: boolean;
};

const Message: React.FC<MessageProps> = ({
    message,
    senderId,
    senderName,
    photoURL,
    showPic,
}) => {
    const isSender = senderId === auth.currentUser?.uid ? true : false;
    return (
        <>
            {isSender && (
                <div className="py-2 px-3 rounded-2xl rounded-br-none self-end bg-slate-900 text-white max-w-md border-white border">
                    {message}
                </div>
            )}
            {!isSender &&
                (showPic ? (
                    <div className="flex space-x-2 ">
                        <img src={photoURL} className="h-7 rounded-full " />
                        <div className="flex flex-col py-2 px-3 rounded-2xl bg-slate-900 text-white max-w-md border-white border rounded-tl-none">
                            <span className="text-xs text-slate-500">
                                {senderName}
                            </span>
                            {message}
                        </div>
                    </div>
                ) : (
                    <div className="flex space-x-2 ">
                        <div className="flex flex-col py-2 px-3 rounded-2xl bg-slate-900 text-white max-w-md border-white border ml-9">
                            {message}
                        </div>
                    </div>
                ))}
        </>
    );
};
export default Message;
