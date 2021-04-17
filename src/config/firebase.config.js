import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7qApd3FeNKilg-fWhLm_y0MkTx2KhpXA",
    authDomain: "clone-b8b97.firebaseapp.com",
    projectId: "clone-b8b97",
    storageBucket: "clone-b8b97.appspot.com",
    messagingSenderId: "171032726873",
    appId: "1:171032726873:web:13c1ba2d9ad63ff0649048"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;