import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';
import { auth, database } from '../firebase';
import { ref, push } from 'firebase/database';
import Header from './Header';
type ChatPageProps = {};

const ChatPage: React.FC<ChatPageProps> = () => {
    const [user, isLoading, error] = useAuthState(auth);
    const [snapshots, messageLoading, messageError] = useList(
        ref(database, 'messages/')
    );
    const inputRef = useRef<HTMLInputElement>(null);
    function logout() {
        auth.signOut();
    }

    function handleClick() {
        if (inputRef.current) {
            push(ref(database, 'messages/' + ''), {
                senderId: user?.uid,
                message: inputRef.current.value,
            });
            inputRef.current.value = '';
        }
    }

    return (
        <div className=" max-w-xl mx-auto border-slate-900 border bg-slate-200 mt-5">
            {isLoading ? <h1>Loading</h1> : user && <Header user={user} />}

            <div>
                {messageError && (
                    <strong> Error : {messageError.message}</strong>
                )}
                {messageLoading && <span>messages loading...</span>}
                {!messageLoading && snapshots && (
                    <div>
                        {snapshots.map((v) => (
                            <h2 key={v.key}>{v.val().message}</h2>
                        ))}
                    </div>
                )}
                <div>
                    <input ref={inputRef} type="text"></input>
                    <button onClick={handleClick}>send</button>
                </div>
            </div>
        </div>
    );
};
export default ChatPage;
