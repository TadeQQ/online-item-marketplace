import { app } from './firebase';
import { getStorage, FirebaseStorage } from 'firebase/storage';

export let firebaseStorage = {} as FirebaseStorage;

if (typeof window !== 'undefined') {
  firebaseStorage = getStorage(app);
}
