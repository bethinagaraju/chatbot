import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import getAuth from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANI6VrbfPMt3szlgkPzsErael_m38WT1g",
  authDomain: "chatbot-74cb3.firebaseapp.com",
  projectId: "chatbot-74cb3",
  storageBucket: "chatbot-74cb3.firebasestorage.app",
  messagingSenderId: "949655587397",
  appId: "1:949655587397:web:3a2f9664d9e829c740312c",
  measurementId: "G-CXPPKKT9VV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);

// Initialize Analytics
const analytics = getAnalytics(app);

// Export auth to use it elsewhere
export { auth };
