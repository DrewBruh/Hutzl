import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDI0pDEYFbCdvIatiIxfVhHFX6E-5ePE-M",
  authDomain: "hutzl-b2354.firebaseapp.com",
  projectId: "hutzl-b2354",
  storageBucket: "hutzl-b2354.appspot.com",
  messagingSenderId: "274497069701",
  appId: "1:274497069701:web:51eab75d390dc4474fffec",
  measurementId: "G-QV8RJB8VH3",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
