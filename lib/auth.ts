// lib/auth.ts
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export const googleLogin = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google Login Error:", error);
    throw error;
  }
};

export const facebookLogin = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Facebook Login Error:", error);
    throw error;
  }
};
