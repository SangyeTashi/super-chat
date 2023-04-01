import { auth } from '../firebase';
type MessageProps = {
    message: string;
    senderId?: string;
    photoURL: string;
    senderName: string;
};

const Message: React.FC<MessageProps> = ({ message, senderId, senderName }) => {
    console.log(senderId, auth.currentUser?.uid);
    const isSender = senderId === auth.currentUser?.uid ? true : false;
    return !isSender ? (
        <div className="flex flex-col py-2 px-3 rounded-lg bg-slate-900 text-white max-w-md border-white border">
            <span className="text-xs text-slate-500">{senderName}</span>
            {message}
        </div>
    ) : (
        <div className="py-2 px-3 rounded-lg self-end bg-slate-900 text-white max-w-md border-white border">
            {message}
        </div>
    );
};
export default Message;
