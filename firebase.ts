// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCsktfuBcrnGMXJzNCRm_t4WmphE6-plW8",
	authDomain: "netflix-clone3010.firebaseapp.com",
	projectId: "netflix-clone3010",
	storageBucket: "netflix-clone3010.appspot.com",
	messagingSenderId: "706329147542",
	appId: "1:706329147542:web:7a482a5f122a3a60a6eab7"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
