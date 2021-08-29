import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyARNrydlfqu_UtuFjrSdCvsCkHuAnKtnMQ",
  authDomain: "facebook-nextjs-clone-a1b5d.firebaseapp.com",
  projectId: "facebook-nextjs-clone-a1b5d",
  storageBucket: "facebook-nextjs-clone-a1b5d.appspot.com",
  messagingSenderId: "384169591723",
  appId: "1:384169591723:web:85a4c1561915b7099e88ee",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, storage, timestamp };
