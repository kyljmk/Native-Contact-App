// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJKCQVH4-8sds3v9q0c4lwaMuVsqiuB-w",
  authDomain: "test-42412.firebaseapp.com",
  projectId: "test-42412",
  storageBucket: "test-42412.appspot.com",
  messagingSenderId: "1013768952384",
  appId: "1:1013768952384:web:6230a4e2726e032f655da5",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };

// import { getAuth } from "firebase/auth";
// ...
// const auth = getAuth(app);
