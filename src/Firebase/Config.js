import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBqmgWxOcbSZUywEG5ZBm5K-wLp_JDg4Fw",
    authDomain: "photo-gallery-39d2e.firebaseapp.com",
    projectId: "photo-gallery-39d2e",
    storageBucket: "photo-gallery-39d2e.appspot.com",
    messagingSenderId: "1028470670180",
    appId: "1:1028470670180:web:e1d703cdaa7eb80444f071"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage , projectFirestore, timestamp};