import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useList } from 'react-firebase-hooks/database';
import { auth, database } from '../firebase';
import { ref, push } from 'firebase/database';
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
        <div>
            {isLoading ? (
                <h1>Loading</h1>
            ) : (
                <div>
                    <img src={user?.photoURL || ''} />
                    <h1>Welcome to the chat {user?.displayName}</h1>
                    <button onClick={logout}>Logout</button>
                </div>
            )}

            <div>
                <h1>Super Chat</h1>
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
