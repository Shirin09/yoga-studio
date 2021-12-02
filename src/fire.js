import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQT_AXs--dHynwWZgFt7Z2W4cUt06WKzQ",
    authDomain: "yooga-7ba1c.firebaseapp.com",
    databaseURL: "https://yooga-7ba1c-default-rtdb.firebaseio.com",
    projectId: "yooga-7ba1c",
    storageBucket: "yooga-7ba1c.appspot.com",
    messagingSenderId: "892253362260",
    appId: "1:892253362260:web:6a6a8114e8e7b754f3f5c1",
    measurementId: "G-5L83YS2D9K"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;