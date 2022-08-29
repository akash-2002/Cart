import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG0YwXVop06-NLVy-pWeEvoyotE91Fl_0",
  authDomain: "cart-b3c84.firebaseapp.com",
  projectId: "cart-b3c84",
  storageBucket: "cart-b3c84.appspot.com",
  messagingSenderId: "353045551927",
  appId: "1:353045551927:web:ec8ceb2fa7f261f6d598b2"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
export default db;