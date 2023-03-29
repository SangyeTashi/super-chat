// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
