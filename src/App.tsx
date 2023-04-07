import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import ChatPage from './ChatPage';
import Loading from './Loading';
import Home from './login/Home';
import { RecoilRoot } from 'recoil';
function App() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            <RecoilRoot>
                {loading && <Loading />}
                {error && <h2>{error.message}</h2>}
                <div className="h-screen p-3">
                    {!loading && (user ? <ChatPage /> : <Home />)}
                </div>
            </RecoilRoot>
        </>
    );
}

export default App;
