import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useEffect, useState } from 'react';
type MessageProps = {
    message: string;
    senderId?: string;
    photoURL: string;
    senderName: string;
};

const Message: React.FC<MessageProps> = ({
    message,
    senderId,
    senderName,
    photoURL,
}) => {
    const [messageSenderId, setMessageSenderId] = useState('');
    const isSender = senderId === auth.currentUser?.uid ? true : false;

    return (
        <>
            {isSender && (
                <div className="py-2 px-3 rounded-lg self-end bg-slate-900 text-white max-w-md border-white border">
                    {message}
                </div>
            )}
            {!isSender && (
                <div className="flex space-x-2 ">
                    <img src={photoURL} className="h-9 rounded-full " />
                    <div className="flex flex-col py-2 px-3 rounded-lg bg-slate-900 text-white max-w-md border-white border">
                        <span className="text-xs text-slate-500">
                            {senderName}
                        </span>
                        {message}
                    </div>
                </div>
            )}
        </>
    );
};
export default Message;
