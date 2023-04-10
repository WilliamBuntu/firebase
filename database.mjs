// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD92eZD1BYyTS-82gSstO7sYUpyDuPBd10",
  authDomain: "fir-1-908e7.firebaseapp.com",
  projectId: "fir-1-908e7",
  storageBucket: "fir-1-908e7.appspot.com",
  messagingSenderId: "673156148064",
  appId: "1:673156148064:web:e000ec95a927e1473a0c05",
  measurementId: "G-W6Y28033YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = firebase.firestore();

firestore.collection('recipes').get().then((snapshots)=>{
    // when we have the data
    console.log(snapshots)
    
    }).catch(err =>{
        console.log(err)
    })