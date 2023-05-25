import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc-O-9NgDJrrjS29ofpk3O-xskk25wtn8",
  authDomain: "app-carrito-504fd.firebaseapp.com",
  projectId: "app-carrito-504fd",
  storageBucket: "app-carrito-504fd.appspot.com",
  messagingSenderId: "639276669335",
  appId: "1:639276669335:web:daca925a9014893188ccd2",
  measurementId: "G-5K7W2TJVDY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 

