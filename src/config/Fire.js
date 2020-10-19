import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyB1dxozoyAllP0e7Dx0pYJVcfV8KBSRiT0",
    authDomain: "desk-design.firebaseapp.com",
    databaseURL: "https://desk-design.firebaseio.com",
    projectId: "desk-design",
    storageBucket: "desk-design.appspot.com",
    messagingSenderId: "264195719925",
    appId: "1:264195719925:web:fdb6eef4624d5660bfbbbc",
    measurementId: "G-N82EVV68JJ"
};
const fire = firebase.initializeApp(config);
export default fire;