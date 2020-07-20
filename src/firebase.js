import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCczoOVpChAAbD4YKVt_XiwkmuhV_5aaE8",
  authDomain: "san-pedro-2021.firebaseapp.com",
  databaseURL: "https://san-pedro-2021.firebaseio.com",
  projectId: "san-pedro-2021",
  storageBucket: "san-pedro-2021.appspot.com",
  messagingSenderId: "527050551435",
  appId: "1:527050551435:web:790633385d2f96c69a248e",
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
