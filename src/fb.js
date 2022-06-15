import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnvZc6xLXZFqaj81wbX-84ehv_smfqVnI",
    authDomain: "projects-todo-e81b9.firebaseapp.com",
    projectId: "projects-todo-e81b9",
    storageBucket: "projects-todo-e81b9.appspot.com",
    messagingSenderId: "1000038839156",
    appId: "1:1000038839156:web:21e9730507ec7469cdf221",
    measurementId: "G-0TX4VWTLC0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  export default db