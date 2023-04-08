import React, { useEffect, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineSend } from 'react-icons/ai';

import { auth, database } from '../firebase';
import { ref, push } from 'firebase/database';
import Header from './Header';

import ChatBox from './ChatBox';
import Loading from './Loading';
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
        <div className="flex flex-col max-w-3xl min-h-full max-h-full mx-auto border-slate-900 border">
            {error && <h1>{error.message}</h1>}
            {isLoading ? <Loading /> : user && <Header user={user} />}

            <ChatBox />

            <form
                className="flex p-2 space-x-2 bg-secondary_dark"
                onSubmit={handleClick}
            >
                <input
                    className="rounded-xl px-3  py-2  bg-tertiary_dark grow focus:outline-none"
                    ref={inputRef}
                    type="text"
                    placeholder="Type a message..."
                ></input>
                <button
                    className="p-2 rounded-full hover:scale-110 active:scale-100"
                    type="submit"
                >
                    <AiOutlineSend size={23} />
                </button>
            </form>
            <button className="rounded-lg p-4 m-4 text-white " onClick={logout}>
                Logout
            </button>
        </div>
    );
};
export default ChatPage;
