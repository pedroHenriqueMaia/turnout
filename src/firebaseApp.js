import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAuEB2uopKQNgskljpicp92ib6-mWcO-00",
  authDomain: "turnout-56ab1.firebaseapp.com",
  projectId: "turnout-56ab1",
  storageBucket: "turnout-56ab1.appspot.com",
  messagingSenderId: "788590673920",
  appId: "1:788590673920:web:1366294bd318f2ef6598e5",
  measurementId: "G-4ZYPGZVTXW"
};

export const firebaseApp = firebase.initializeApp(config);