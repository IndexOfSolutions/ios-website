// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtsMrOzbr-6VIMdWZmMmMuxK2K3bLLMOY",
  authDomain: "ios-web-8937f.firebaseapp.com",
  projectId: "ios-web-8937f",
  storageBucket: "ios-web-8937f.firebasestorage.app",
  messagingSenderId: "594366679004",
  appId: "1:594366679004:web:33dace5d0ac38d3579f119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }
export default app;