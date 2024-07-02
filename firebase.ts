import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNSYAP3QQv2hM5UKacl3et34XLO0ZLx5M",
  authDomain: "dropbox-clone-3905c.firebaseapp.com",
  projectId: "dropbox-clone-3905c",
  storageBucket: "dropbox-clone-3905c.appspot.com",
  messagingSenderId: "550995125605",
  appId: "1:550995125605:web:2bc0644e760545c808ed8c",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
