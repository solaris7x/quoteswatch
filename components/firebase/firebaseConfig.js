import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7Ez5Og9MvqBGov_-wZdEwFPyEVbK5B_E",
  authDomain: "quoteswatch.firebaseapp.com",
  databaseURL: "https://quoteswatch.firebaseio.com",
  projectId: "quoteswatch",
  storageBucket: "quoteswatch.appspot.com",
  messagingSenderId: "294695320608",
  appId: "1:294695320608:web:7413cf244b546667871045",
  measurementId: "G-QNJ62NZDQN",
};

const samplefirebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};

// Check that `window` is in scope for the analytics module!
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // To enable analytics. https://firebase.google.com/docs/analytics/get-started
  // if ("measurementId" in firebaseConfig) firebase.analytics();
}
const firedb = firebase.firestore();
const firebucket = firebase.storage();

export default firebase;
export { firedb, firebucket };
