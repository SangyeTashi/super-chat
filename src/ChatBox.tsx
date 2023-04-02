import { ref } from 'firebase/database';
import { useEffect, useRef } from 'react';
import { useList } from 'react-firebase-hooks/database';
import { database } from '../firebase';
import Message from './Message';
import { useAutoAnimate } from '@formkit/auto-animate/react';
const ChatBox = () => {
    // Get messages
    const [messages, messageLoading, messageError] = useList(
        ref(database, 'messages/')
    );
    const scrollParentRef = useRef<HTMLDivElement>(null);

    //Scroll new messages into view
    useEffect(() => {
        scrollParentRef.current?.lastElementChild?.scrollIntoView({
            behavior: 'smooth',
        });
    }, [messages]);
    return (
        <div className=" p-4 shrink space-y-4 overflow-scroll">
            {messageError && <h1> Error : {messageError.message}</h1>}
            {messageLoading && <span>messages loading...</span>}

            {/* map and render all messages */}
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
