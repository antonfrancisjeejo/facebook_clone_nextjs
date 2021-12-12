import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBd1V6iGGKbZUojrxbpoQY-WL-E2PXJJWk",
  authDomain: "facebook-clone-nextjs-5b0f7.firebaseapp.com",
  projectId: "facebook-clone-nextjs-5b0f7",
  storageBucket: "facebook-clone-nextjs-5b0f7.appspot.com",
  messagingSenderId: "942093862639",
  appId: "1:942093862639:web:6af3529d9341a575247d1a",
};
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, storage, timestamp };
