import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Values come from google-services.json.
// TODO: In Firebase Console > Project settings > Your apps, add a *Web app*
// and paste its config here (especially apiKey and appId) so the key is
// meant for browsers. Then restrict the key by HTTP referrer.
const firebaseConfig = {
  apiKey: "AIzaSyDVjzDOGFRRYLwFZgwQ77eKlCQWvvxIvxk",
  authDomain: "picnic-c822c.firebaseapp.com",
  databaseURL: "https://picnic-c822c-default-rtdb.firebaseio.com",
  projectId: "picnic-c822c",
  storageBucket: "picnic-c822c.firebasestorage.app",
  messagingSenderId: "182444088435",
  appId: "1:182444088435:android:a8d1f5532c9898fd2e9e06", // replace with the Web app ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
