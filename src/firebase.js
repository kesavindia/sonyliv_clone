// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQ58NAJSm9Fsz742zGj0fao_nQaCTc5VQ',
  authDomain:'sonyliv-clone-72f83.firebaseapp.com',
  projectId: 'sonyliv-clone-72f83',
  storageBucket:  'sonyliv-clone-72f83.appspot.com',
  messagingSenderId:'568119356960',
  appId: '1:568119356960:web:2f126fffecc5dc3464d645'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)