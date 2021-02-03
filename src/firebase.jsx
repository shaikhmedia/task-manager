import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_5twlXj7dPCj4QCsg_WtyatVueCdC57w",
  authDomain: "task-tracker-f25f1.firebaseapp.com",
  databaseURL: "https://task-tracker-f25f1-default-rtdb.firebaseio.com",
  projectId: "task-tracker-f25f1",
  storageBucket: "task-tracker-f25f1.appspot.com",
  messagingSenderId: "935251971382",
  appId: "1:935251971382:web:59eebb40ccd98ef0ec7797",
  measurementId: "G-SN499DNCCJ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
