import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxujU5yMB6x3HsYS4ah-ipuvYXK6vK9Ps",
  authDomain: "e-commerce-react-d72f0.firebaseapp.com",
  projectId: "e-commerce-react-d72f0",
  storageBucket: "e-commerce-react-d72f0.appspot.com",
  messagingSenderId: "845122161475",
  appId: "1:845122161475:web:0ab7edb8ccaa60c1e17df6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);