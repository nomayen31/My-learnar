// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfXzaEsJI0wKJuonjj86arcDa1EWb3X8c",
    authDomain: "my-learnar.firebaseapp.com",
    projectId: "my-learnar",
    storageBucket: "my-learnar.appspot.com",
    messagingSenderId: "263747543366",
    appId: "1:263747543366:web:198fc0e10cade30b9f8547"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app