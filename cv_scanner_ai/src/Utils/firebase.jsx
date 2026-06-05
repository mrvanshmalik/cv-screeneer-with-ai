
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDPaY9npaC5uN66GX2oYKXHxMdZuvf8uvA",
  authDomain: "cv-scanner-ai.firebaseapp.com",
  projectId: "cv-scanner-ai",
  storageBucket: "cv-scanner-ai.firebasestorage.app",
  messagingSenderId: "826509880465",
  appId: "1:826509880465:web:82017355c0710dd8ebe330",
  measurementId: "G-VCKVPMR68S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth , provider } ;