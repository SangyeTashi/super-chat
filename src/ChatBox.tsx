import { ref } from 'firebase/database';
import { useList } from 'react-firebase-hooks/database';
import { auth, database } from '../firebase';
import ChatSkeletonLoader from './components/ChatSkeletonLoader';
import MessageBubbleSender from './components/MessageBubbleSender';
import MessageBubbleReceived from './components/MessageBubbleReceived';
const ChatBox = () => {
    // Get messages
    const [messages, messageLoading, messageError] = useList(
        ref(database, 'messages/')
    );
    return (
        <div
            id="scrollParent"
            className=" p-4 shrink space-y-4 overflow-scroll "
        >
            {messageError && <h1> Error : {messageError.message}</h1>}
            {messageLoading && <ChatSkeletonLoader />}

            {/* map and render all messages */}
            {messages && (
                <div className="flex flex-col items-start space-y-1 overflow-y-auto overflow-x-hidden">
                    {messages.map((v, index) => {
                        if (v.val().senderId === auth.currentUser?.uid) {
                            return (
                                <MessageBubbleSender
                                    text={v.val().message}
                                    isLatest={index + 1 === messages.length}
                                />
                            );
                        }
                        return (
                            <MessageBubbleReceived
                                key={v.key}
                                message={v.val().message}
                                photoURL={v.val().photoURL}
                                senderName={v.val().senderName}
                                senderEmail={v.val().senderEmail}
                                isLatest={messages.length === index + 1}
                                // if a message sender sends messages contineously, show only one profile
                                showPic={
                                    index === 0
                                        ? true
                                        : messages.at(index)?.val().senderId !==
                                          messages.at(index - 1)?.val().senderId
                                }
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
export default ChatBox;
