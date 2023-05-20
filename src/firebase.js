// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {GoogleAuthProvider, getAuth,signOut,signInWithPopup, onAuthStateChanged, }from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AlizaSyB8x5b8PX8iXR-NnWjsrwVCJvyZeVfYT0o",
  authDomain: "diploma-5158b.firebaseapp.com",
  projectId: "diploma-5158b",
  storageBucket: "diploma-5158b.appspot.com",
  messagingSenderId: "485972265136",
  appId: "1:485972265136:web:8a44d1ae9a65d5a0d1d375"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const auth= getAuth(app);


//получить список категорий (коллекция документов).
export const categoryCollection = collection(db, 'categories');
export const productCollection = collection(db,'products');
export const orderCollection = collection(db,'orders')

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth,callback);


