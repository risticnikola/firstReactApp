import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSU7kdacwpcO_LO1ZXnuTBuprd_eO69rM",
  authDomain: "catch-of-the-day-nikola.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-nikola.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// This is a named Export
export { firebaseApp };

// This is a default export
export default base;
