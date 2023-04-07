import { ref } from 'firebase/database';
import { useEffect, useRef, useState } from 'react';
import { useList } from 'react-firebase-hooks/database';
import { database } from '../firebase';
import Message from './Message';
import { useRecoilState } from 'recoil';
import { lastSenderIdState } from './atoms/lastSenderId';
const ChatBox = () => {
    // Get messages
    const [messages, messageLoading, messageError] = useList(
        ref(database, 'messages/')
    );
    const scrollParentRef = useRef<HTMLDivElement>(null);
    const [lastSenderId, setLastSenderId] = useRecoilState(lastSenderIdState);
    const [showPic, setShowPic] = useState(true);
    //Scroll new messages into view
    useEffect(() => {
        scrollParentRef.current?.lastElementChild?.scrollIntoView();
    }, [messages]);
    return (
        <div className=" p-4 shrink space-y-4 overflow-scroll grow">
            {messageError && <h1> Error : {messageError.message}</h1>}
            {messageLoading && <span>messages loading...</span>}

            {/* map and render all messages */}
            {messages && (
                <div
                    ref={scrollParentRef}
                    className="flex flex-col items-start space-y-1 overflow-y-auto overflow-x-hidden"
                >
                    {messages.map((v, index) => (
                        <Message
                            key={v.key}
                            message={v.val().message}
                            senderId={v.val().senderId}
                            photoURL={v.val().photoURL}
                            senderName={v.val().senderName}
                            // if a message sender sends messages contineously, show only one profile
                            showPic={
                                messages.at(index)?.val().senderId !==
                                messages.at(index - 1)?.val().senderId
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default ChatBox;
