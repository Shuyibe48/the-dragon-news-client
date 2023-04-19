// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzo0LpaAMvsAQX_Xr2fkDqAik0ikdSiY8",
  authDomain: "the-news-dragon-client-c71bf.firebaseapp.com",
  projectId: "the-news-dragon-client-c71bf",
  storageBucket: "the-news-dragon-client-c71bf.appspot.com",
  messagingSenderId: "732101787378",
  appId: "1:732101787378:web:38fdb400a5a95b01ad5a6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app