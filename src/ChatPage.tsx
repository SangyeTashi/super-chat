import React, { useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, database } from '../firebase';
import { ref, push } from 'firebase/database';
import Header from './Header';

import ChatBox from './ChatBox';
type ChatPageProps = {};

const ChatPage: React.FC<ChatPageProps> = () => {
    const [user, isLoading, error] = useAuthState(auth);
    const inputRef = useRef<HTMLInputElement>(null);

    function logout() {
        auth.signOut();
    }

    function handleClick(e: React.MouseEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputRef.current?.value) {
            push(ref(database, 'messages/' + ''), {
                senderId: user?.uid,
                message: inputRef.current.value,
                photoURL: user?.photoURL,
                senderName: user?.displayName,
            });

            //scrollRef?.current?.lastElementChild?.scrollIntoView();
            inputRef.current.value = '';
        }
    }

    return (
        <div className="flex flex-col max-w-xl max-h-full mx-auto border-slate-900 border bg-slate-200 ">
            {error && <h1>{error.message}</h1>}
            {isLoading ? <h1>Loading</h1> : user && <Header user={user} />}

            <ChatBox />

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
            <button
                className="bg-red-600 rounded-lg p-4 m-4 text-white"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
};
export default ChatPage;
