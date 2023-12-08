import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCKG0poeSinBrnUsRLa104wg1U1x8OQyxE",
  authDomain: "m4rk-reactjs-redux-firebase.firebaseapp.com",
  projectId: "m4rk-reactjs-redux-firebase",
  storageBucket: "m4rk-reactjs-redux-firebase.appspot.com",
  messagingSenderId: "861865591820",
  appId: "1:861865591820:web:70f464fc4f295a79895a29",
  measurementId: "G-8SXGF5F549"
};

const firebase = initializeApp(firebaseConfig);
export default firebase;
