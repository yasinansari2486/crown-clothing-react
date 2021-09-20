import firebase from 'firebase/compat/app';
import "firebase/compat/auth"
import 'firebase/compat/firestore';

    const config = {
        apiKey: "AIzaSyAxYs_FfhPeKeW1ckvaI24vrk4VH9wHFtg",
        authDomain: "crown-db-f7e14.firebaseapp.com",
        projectId: "crown-db-f7e14",
        storageBucket: "crown-db-f7e14.appspot.com",
        messagingSenderId: "409340409404",
        appId: "1:409340409404:web:fc7497c8b9312544407539",
        measurementId: "G-VXEYY1V1JX"
    };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;