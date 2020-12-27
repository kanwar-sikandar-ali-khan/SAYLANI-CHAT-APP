import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAkeN8ONOfEbwBk9zZiPgDBKoEA3_jGO7g",
  authDomain: "chat-application-739f3.firebaseapp.com",
  databaseURL: "https://chat-application-739f3.firebaseio.com",
  projectId: "chat-application-739f3",
  storageBucket: "chat-application-739f3.appspot.com",
  messagingSenderId: "734216427929",
  appId: "1:734216427929:web:d60b799126ee2a87795b08",
  measurementId: "G-RDBJQCQGQ1"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
  