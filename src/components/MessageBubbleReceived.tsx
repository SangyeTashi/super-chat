import { useEffect, useRef } from 'react';
import blankProfilePhoto from '../assets/blankPhoto.jpg';
type MessageProps = {
    message: string;
    photoURL: string;
    senderName: string;
    showPic: boolean;
    senderEmail: string;
    isLatest: boolean;
};

const MessageBubbleReceived: React.FC<MessageProps> = ({
    message,
    senderName,
    photoURL = blankProfilePhoto,
    showPic,
    senderEmail,
    isLatest = false,
}) => {
    const messageRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        isLatest && messageRef.current?.scrollIntoView();
    });
    return (
        <div ref={messageRef}>
            {showPic ? (
                <div className="flex space-x-2 pt-3">
                    <img src={photoURL} className="h-7 rounded-full " />
                    <div className="flex flex-col py-2 px-3 rounded-xl bg-secondary_dark text-white max-w-sm md:max-w-md rounded-tl-none">
                        <span className="text-sm text-green_accent">
                            ~ {senderName}
                            <span className="ml-5 text-gray-500">
                                {senderEmail}
                            </span>
                        </span>
                        {message}
                    </div>
                </div>
            ) : (
                <div className="flex space-x-2 ">
                    <div className="flex flex-col py-2 px-4 rounded-xl bg-secondary_dark text-white md:max-w-md max-w-xs ml-9">
                        {message}
                    </div>
                </div>
            )}
        </div>
    );
};
export default MessageBubbleReceived;
