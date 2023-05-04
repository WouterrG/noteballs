import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB79Nr2wbMim3fKDkanDimStMuEtrwAxN8",
  authDomain: "noteballs-3e5b8.firebaseapp.com",
  projectId: "noteballs-3e5b8",
  storageBucket: "noteballs-3e5b8.appspot.com",
  messagingSenderId: "190414253734",
  appId: "1:190414253734:web:660639f069bf1998f8ce67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
