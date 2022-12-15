import { app } from './firebase';
import { getFirestore, Firestore } from 'firebase/firestore';

export let firestore = {} as Firestore;

if (typeof window !== 'undefined') {
  firestore = getFirestore(app);
}
