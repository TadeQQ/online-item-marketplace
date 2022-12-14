// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const apiKey = `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`;
const messagingSenderId = `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`;
const appId = `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`;
const measurementId = `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'online-item-marketplace.firebaseapp.com',
  projectId: 'online-item-marketplace',
  storageBucket: 'online-item-marketplace.appspot.com',
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId,
};

// Initialize Firebase
export let app = {} as FirebaseApp;
if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
}
