// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLmYPB9ow3GX51bLuHB1GyAX7GXnVrJ6U",
    authDomain: "react-project-22513.firebaseapp.com",
    projectId: "react-project-22513",
    storageBucket: "react-project-22513.appspot.com",
    messagingSenderId: "379768197542",
    appId: "1:379768197542:web:6cb04514f576d5502abf67",
    measurementId: "G-Q7GTGECKFZ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }