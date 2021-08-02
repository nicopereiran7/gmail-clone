import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbS_QG_c0zwXMxE8hGzT9ExgiMOtWbYsc",
  authDomain: "clone-35b0d.firebaseapp.com",
  projectId: "clone-35b0d",
  storageBucket: "clone-35b0d.appspot.com",
  messagingSenderId: "95414357778",
  appId: "1:95414357778:web:cddbd26ab3056746302dcb",
  measurementId: "G-QWTZ2YJYZ1",
};

export default function initFirbase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
