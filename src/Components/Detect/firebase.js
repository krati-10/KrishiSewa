import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3Avg3ds_SvbKP4GNGQXemy7gxeK7mQKM",
  authDomain: "uploadingfiles-e2033.firebaseapp.com",
  projectId: "uploadingfiles-e2033",
  databaseURL: "gs://uploadingfiles-e2033.appspot.com",
  storageBucket: "uploadingfiles-e2033.appspot.com",
  messagingSenderId: "793254890731",
  appId: "1:793254890731:web:220f055f7c385ddb4502ae",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
