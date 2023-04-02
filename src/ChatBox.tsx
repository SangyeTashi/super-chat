import { ref } from 'firebase/database';
import { useEffect, useRef } from 'react';
import { useList } from 'react-firebase-hooks/database';
import { database } from '../firebase';
import Message from './Message';

const ChatBox = () => {
    const [messages, messageLoading, messageError] = useList(
        ref(database, 'messages/')
    );
    const scrollParentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollParentRef.current?.lastElementChild?.scrollIntoView();
    }, [messages]);
    return (
        <div className=" p-4 shrink space-y-4 overflow-scroll">
            {messageError && <h1> Error : {messageError.message}</h1>}
            {messageLoading && <span>messages loading...</span>}
            {messages && (
                <div
                    ref={scrollParentRef}
                    className="flex flex-col items-start space-y-1 overflow-y-auto overflow-x-hidden"
                >
                    {messages.map((v) => (
                        <Message
                            key={v.key}
                            message={v.val().message}
                            senderId={v.val().senderId}
                            photoURL={v.val().photoURL}
                            senderName={v.val().senderName}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default ChatBox;
