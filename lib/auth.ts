// lib/auth.ts
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
};

export const facebookLogin = async () => {
  const provider = new FacebookAuthProvider();
  await signInWithPopup(auth, provider);
};
