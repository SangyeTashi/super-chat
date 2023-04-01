import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';
import { auth, database } from '../firebase';
import { ref, push } from 'firebase/database';
import Header from './Header';
import Message from './Message';
type ChatPageProps = {};

const ChatPage: React.FC<ChatPageProps> = () => {
    const [user, isLoading, error] = useAuthState(auth);
    const [messages, messageLoading, messageError] = useList(
        ref(database, 'messages/')
    );
    const inputRef = useRef<HTMLInputElement>(null);
    function logout() {
        auth.signOut();
    }

    function handleClick(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputRef.current) {
            push(ref(database, 'messages/' + ''), {
                senderId: user?.uid,
                message: inputRef.current.value,
                photoURL: user?.photoURL,
                senderName: user?.displayName,
            });
            inputRef.current.value = '';
        }
    }

    return (
        <div className="flex flex-col max-w-xl max-h-full mx-auto border-slate-900 border bg-slate-200 ">
            {error && <h1>{error.message}</h1>}
            {isLoading ? <h1>Loading</h1> : user && <Header user={user} />}

            <div className=" p-4 shrink space-y-4 overflow-scroll">
                {messageError && <h1> Error : {messageError.message}</h1>}
                {messageLoading ? (
                    <span>messages loading...</span>
                ) : (
                    messages && (
                        <div className="flex flex-col items-start space-y-1 overflow-y-auto">
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
                    )
                )}
            </div>
            <form className="flex p-2 space-x-2" onSubmit={handleClick}>
                <input
                    className="rounded-full px-3  text-white py-2  bg-slate-600 grow"
                    ref={inputRef}
                    type="text"
                    placeholder="Message..."
                ></input>
                <button
                    className="text-white bg-green-500 py-2 px-4 rounded-full"
                    type="submit"
                >
                    send
                </button>
            </form>
            <button onClick={logout}>Logout</button>
        </div>
    );
};
export default ChatPage;
