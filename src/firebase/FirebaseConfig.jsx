
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDwPdhH6dbZWogeX8bFxLccbLcSkXnPQNM",
//   authDomain: "comfy-sofa-store.firebaseapp.com",
//   projectId: "comfy-sofa-store",
//   storageBucket: "comfy-sofa-store.appspot.com",
//   messagingSenderId: "964284905043",
//   appId: "1:964284905043:web:20f994343ebfa90dda78a6",
//   measurementId: "G-EFDXQNDLEN"
// };
  

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export { fireDB, auth }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaUxiF49FHQeYh5PrxRWDoWmO5Ws4M_0o",
  authDomain: "maruthi-supermarket-ebfb6.firebaseapp.com",
  projectId: "maruthi-supermarket-ebfb6",
  storageBucket: "maruthi-supermarket-ebfb6.appspot.com",
  messagingSenderId: "127381798802",
  appId: "1:127381798802:web:59fe657a516eebd1178b4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }