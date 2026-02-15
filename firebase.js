// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBabf4aiV1lW38gaOx1t9o25gLFUvzvBL4",
  authDomain: "neil-movie.firebaseapp.com",
  projectId: "neil-movie",
  storageBucket: "neil-movie.firebasestorage.app",
  messagingSenderId: "836533627454",
  appId: "1:836533627454:web:7a9c5b539136faeb4c3f6f",
  measurementId: "G-P53EGBMW3L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);