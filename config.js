import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDxcW3FqnhaWm9j-egU6Kfnodq2cIcI-9I",
    authDomain: "e-library-6b72f.firebaseapp.com",
    projectId: "e-library-6b72f",
    storageBucket: "e-library-6b72f.appspot.com",
    messagingSenderId: "910152648882",
    appId: "1:910152648882:web:09464bee8642cc2bd021ab"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();