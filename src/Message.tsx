import { auth } from '../firebase';
type MessageProps = {
    message: string;
    senderId?: string;
    photoURL: string;
    senderName: string;
    showPic: boolean;
    senderEmail: string;
};

const Message: React.FC<MessageProps> = ({
    message,
    senderId,
    senderName,
    photoURL,
    showPic,
    senderEmail,
}) => {
    const isSender = senderId === auth.currentUser?.uid ? true : false;
    return (
        <>
            {isSender && (
                <div className="py-2 px-3 rounded-2xl rounded-br-none self-end bg-green_accent_dark text-white max-w-md ">
                    {message}
                </div>
            )}
            {!isSender &&
                (showPic ? (
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
                ))}
        </>
    );
};
export default Message;
