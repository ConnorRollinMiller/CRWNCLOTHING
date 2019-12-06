import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
   apiKey: 'AIzaSyDNA2wwMF63_bzoit5-0qG4dgWCTfKkUrM',
   authDomain: 'crwn-db-f85b1.firebaseapp.com',
   databaseURL: 'https://crwn-db-f85b1.firebaseio.com',
   projectId: 'crwn-db-f85b1',
   storageBucket: 'crwn-db-f85b1.appspot.com',
   messagingSenderId: '666818820619',
   appId: '1:666818820619:web:1d8502e3cdcfa7eb6d250e'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
         });
      } catch (err) {
         console.error('error creating user', err.message);
      }
   }

   return userRef;
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
