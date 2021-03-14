import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyABiQIBbqbylENL5207oEOSq9zR6iSGclQ",
    authDomain: "crwn-db-fd985.firebaseapp.com",
    projectId: "crwn-db-fd985",
    storageBucket: "crwn-db-fd985.appspot.com",
    messagingSenderId: "701563694176",
    appId: "1:701563694176:web:81622d9e876074ea1d6705",
    measurementId: "G-9C5KLZZWSV"
  };

// Configure Firebase
firebase.initializeApp(config);

//Configure OAuth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;