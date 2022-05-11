import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSvDPwo09WPn8EXr4Tr9Mz-gQsk6r1xaU",
    authDomain: "ilgi-277f9.firebaseapp.com",
    projectId: "ilgi-277f9",
    storageBucket: "ilgi-277f9.appspot.com",
    messagingSenderId: "757904897116",
    appId: "1:757904897116:web:404513ca78308dc0372299"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()