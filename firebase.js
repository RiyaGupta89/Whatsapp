import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVzdJpelS5iRSIurAxXXXj6zvfQxXE4Ps",
    authDomain: "whatsapp-94245.firebaseapp.com",
    projectId: "whatsapp-94245",
    storageBucket: "whatsapp-94245.appspot.com",
    messagingSenderId: "907297453167",
    appId: "1:907297453167:web:fd4199793ab762be54099a"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {db, auth, provider};