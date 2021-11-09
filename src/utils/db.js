
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// import * as firebase from 'firebase/app';
// import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNv8bBIeKnpyhLD60764T-HD8xSTeGkv0",
    authDomain: "tecnogame-1101.firebaseapp.com",
    databaseURL: "https://tecnogame-1101-default-rtdb.firebaseio.com",
    projectId: "tecnogame-1101",
    storageBucket: "tecnogame-1101.appspot.com",
    messagingSenderId: "418265774141",
    appId: "1:418265774141:web:073e6c1917978f027c1254",
    measurementId: "G-TN3PMKRDLZ"
};
  
//Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// export function getFirebase(){
//     return app;
// }

// export function getFirestore(){
//     return firebase.firestore(app);
// }