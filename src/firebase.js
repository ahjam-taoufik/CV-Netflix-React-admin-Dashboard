
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = { 
  apiKey: "AIzaSyC3CcRbPTle4CgskrxegVZlOYm7WODmC48",
  authDomain: "cv-netflix.firebaseapp.com",
  projectId: "cv-netflix",
  storageBucket: "cv-netflix.appspot.com",
  messagingSenderId: "996860910530",
  appId: "1:996860910530:web:c7dd7e724fef73b44e945b"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;