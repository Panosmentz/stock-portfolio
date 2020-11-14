import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGMIbCaMM8cis78P2-grVDSSjmGTc-PLw",
  authDomain: "stock-portfolio-ce5d8.firebaseapp.com",
  databaseURL: "https://stock-portfolio-ce5d8.firebaseio.com",
  projectId: "stock-portfolio-ce5d8",
  storageBucket: "stock-portfolio-ce5d8.appspot.com",
  messagingSenderId: "349642508142",
  appId: "1:349642508142:web:f4761bc29eb5a97456a37f",
  measurementId: "G-SYMTJYFBQ8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
