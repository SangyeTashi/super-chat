import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

type ChatPageProps = {};

const ChatPage: React.FC<ChatPageProps> = () => {
    const [user, isLoading, error] = useAuthState(auth);
    function logout() {
        auth.signOut();
    }
    console.log(user?.photoURL);
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
        </div>
    );
};
export default ChatPage;
