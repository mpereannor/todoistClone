import firebase from 'firebase/app';
import 'firebase/firestore';

const fireBaseConfig = firebase.intializeApp({ 
  apiKey: "AIzaSyCkHb7n5ieiTcYHzuLWpepBs69A7k8duGQ",
  authDomain: "todoist-mpere.firebaseapp.com",
  databaseURL: "https://todoist-mpere.firebaseio.com",
  projectId: "todoist-mpere",
  storageBucket: "todoist-mpere.appspot.com",
  messagingSenderId: "169865514602",
  appId: "1:169865514602:web:3d74b53c2bb90949860413",
});

export { fireBaseConfig as firebase };