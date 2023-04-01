import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatPage from './ChatPage';
import Login from './Login';
import { atom, RecoilRoot } from 'recoil';
function App() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <RecoilRoot>
            {loading && <h1>loading</h1>}
            <div className="h-screen p-3">
                {!loading && (user ? <ChatPage /> : <Login />)}
            </div>
        </RecoilRoot>
    );
}

export default App;
