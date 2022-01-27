import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC1askjlw-zU5t_RbziaLv9kE2_x57gCnQ",
  authDomain: "registering-student.firebaseapp.com",
  projectId: "registering-student",
  storageBucket: "registering-student.appspot.com",
  messagingSenderId: "126121268286",
  appId: "1:126121268286:web:b00485a4374c9ea5892d6f",
});

const db = firebaseApp.firestore();

export { db };
