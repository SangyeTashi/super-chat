import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatPage from './ChatPage';
import Login from './Login';
function App() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            {loading && <h1>loading</h1>}
            {!loading && (user ? <ChatPage /> : <Login />)}
        </>
    );
}

export default App;
