import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatPage from './ChatPage';
import Loading from './Loading';
import Home from './login/Home';
function App() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            {loading && <Loading />}
            {error && <h2>{error.message}</h2>}
            <div className="h-screen p-3">
                {!loading && (user ? <ChatPage /> : <Home />)}
            </div>
        </>
    );
}

export default App;
