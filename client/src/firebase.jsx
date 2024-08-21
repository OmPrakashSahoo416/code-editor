import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyCbjfrdAzjVoHHvv_0zzjDzmjBX8ZvEWE8",
    authDomain: "code-editor-cfd80.firebaseapp.com",
    projectId: "code-editor-cfd80",
    storageBucket: "code-editor-cfd80.appspot.com",
    messagingSenderId: "887503764885",
    appId: "1:887503764885:web:088e57bdd84dc803378a9c",
    measurementId: "G-05RHY4SPHB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebase.auth().getAuth()

const db = firebaseApp.firestore();
const storage = getStorage(firebaseApp);




export {db, storage};






