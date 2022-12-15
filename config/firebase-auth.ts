import { app } from './firebase';
import { Auth, initializeAuth, browserLocalPersistence } from 'firebase/auth';

export let firebaseAuth = {} as Auth;

if (typeof window !== 'undefined') {
  firebaseAuth = initializeAuth(app, {
    persistence: browserLocalPersistence,
  });
}
