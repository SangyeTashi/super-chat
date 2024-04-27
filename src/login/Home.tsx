import LoginWithGoogle from './LoginWithGoogle';
import { useRecoilValue } from 'recoil';
import { loginPageState } from '../atoms/loginFormState';
import SignUp from './SignUp';
import LoginWithEmail from './LoginWithEmail';
function Home() {
    const loginPage = useRecoilValue(loginPageState);

    return (
        <div className="flex flex-col items-center justify-center h-full  ">
            <div className="bg-secondary_dark p-10 flex-col space-y-4 min-w-[400px] flex items-stretch rounded-2xl ">
                <div className="flex flex-col items-center pb-2">
                    <h1 className="text-xl font-bold ">Super Chat</h1>
                    <img
                        src="/src/assets/logo.png"
                        alt=""
                        className="bg-blend-color-dodge"
                    />
                    <div className="text-sm mx-auto">Continue with </div>
                </div>

                <LoginWithGoogle />

                <div className="mx-auto text-sm ">- OR -</div>
                {loginPage === 'LOGIN' && <LoginWithEmail />}

                {loginPage === 'SIGNUP' && <SignUp />}
            </div>
        </div>
    );
}
export default Home;
