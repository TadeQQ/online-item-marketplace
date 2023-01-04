import { Collection } from '../schemas/Collections';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import type { SignUpData, SignInData } from '../schemas';
import { firebaseAuth } from '../config/firebase-auth';

type AuthContextData = ReturnType<typeof useProvideAuth>;
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const value = useProvideAuth();
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useProvideAuth = () => {
  const [isLoading, setLoading] = useState(true);
  const [isProfileCreationPending, setProfileCreationPending] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const displayName = user?.displayName;
  const email = user?.email;
  const photoURL = user?.photoURL;
  const uid = user?.uid;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const createUser = useCallback(
    async ({ name, surname, email, password, phone }: SignUpData) => {
      try {
        setProfileCreationPending(true);

        const [
          createUserWithEmailAndPassword,
          doc,
          serverTimestamp,
          setDoc,
          firestore,
        ] = await Promise.all([
          import('firebase/auth').then((m) => m.createUserWithEmailAndPassword),
          import('firebase/firestore').then((m) => m.doc),
          import('firebase/firestore').then((m) => m.serverTimestamp),
          import('firebase/firestore').then((m) => m.setDoc),
          import('../config/firebase-firestore').then((m) => m.firestore),
        ]);

        const { user } = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );

        await setDoc(doc(firestore, Collection.USERS, user.uid), {
          name,
          surname,
          email,
          phone,
          createdAt: serverTimestamp(),
        });
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setProfileCreationPending(false);
      }
    },
    []
  );

  const signIn = useCallback(async ({ email, password }: SignInData) => {
    const signInWithEmailAndPassword = await import('firebase/auth').then(
      (m) => m.signInWithEmailAndPassword
    );
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }, []);

  const signOut = useCallback(async () => {
    const signOut = await import('firebase/auth').then((m) => m.signOut);
    return signOut(firebaseAuth);
  }, []);

  return {
    uid,
    displayName,
    email,
    photoURL,
    user,
    isLoading,
    isAuthenticated,
    isProfileCreationPending,
    createUser,
    signIn,
    signOut,
  };
};

export const useAuth = () => {
  return useContext(AuthContext);
};
