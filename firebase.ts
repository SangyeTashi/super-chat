import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyAcmFtH-U5ascjYvcXUzg2rWDs54oZBsxg',
    authDomain: 'chat-app-4e4b7.firebaseapp.com',
    databaseURL: 'https://chat-app-4e4b7-default-rtdb.firebaseio.com',
    projectId: 'chat-app-4e4b7',
    storageBucket: 'chat-app-4e4b7.appspot.com',
    messagingSenderId: '1092623898874',
    appId: '1:1092623898874:web:435477fde65e5786ad9143',
    measurementId: 'G-XLL0PC415E',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
