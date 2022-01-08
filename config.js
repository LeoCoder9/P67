 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyDj4kcxNz4H7FetHTwVIad0M8iU_wSrZ7E",
  authDomain: "schoolattendance-a34c3.firebaseapp.com",
  databaseURL: "https://schoolattendance-a34c3-default-rtdb.firebaseio.com",
  projectId: "schoolattendance-a34c3",
  storageBucket: "schoolattendance-a34c3.appspot.com",
  messagingSenderId: "127459052443",
  appId: "1:127459052443:web:2cb233cad21d368840ef3e"
};

// Initialize Firebase

if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.database()
 

  