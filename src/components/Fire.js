import firebase from "firebase";

const config = {
  apiKey: "AIzaSyANw8oVLIv-hZJ_stJfTMsXVqFoxpZ_34I",
  authDomain: "to-do-list-d5204.firebaseapp.com",
  databaseURL: "",
  projectId: "to-do-list-d5204",
  storageBucket: "to-do-list-d5204.appspot.com",
  messagingSenderId: "753230171857",
  appId: "1:753230171857:web:8469e5da5782b2c09dfff0",
};

const fire = firebase.initializeApp(config);
export default fire;
