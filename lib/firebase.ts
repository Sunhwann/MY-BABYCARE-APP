// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBl4ii299DYGkve-e531d4U08eVkpfDdIg",
  authDomain: "my-babycare-app.firebaseapp.com",
  projectId: "my-babycare-app",
  storageBucket: "my-babycare-app.firebasestorage.app",
  messagingSenderId: "307201812669",
  appId: "1:307201812669:web:9012ccbe17a93b09d16fd4",
  measurementId: "G-PFWL5ZVWQ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, db, googleProvider, facebookProvider };
