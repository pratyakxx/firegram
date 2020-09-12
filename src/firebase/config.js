import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCTbg33CQzT1fa19QjIkL7wwMYj-lHdmIk",
    authDomain: "firegram-dc841.firebaseapp.com",
    databaseURL: "https://firegram-dc841.firebaseio.com",
    projectId: "firegram-dc841",
    storageBucket: "firegram-dc841.appspot.com",
    messagingSenderId: "237154162167",
    appId: "1:237154162167:web:bb20fb87f5819c1ab38af2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectFirestore,projectStorage};