import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "your_key",
    authDomain: "curso-react-1c617.firebaseapp.com",
    projectId: "curso-react-1c617",
    storageBucket: "curso-react-1c617.firebasestorage.app",
    messagingSenderId: "14966213883",
    appId: "1:14966213883:web:3e6ac23c9adbe7df91345e",
    measurementId: "G-T1K02QTRJX"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };