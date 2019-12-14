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

export const addCollectionAndDocuments = async (
   collectionKey,
   objectsToAdd
) => {
   const collectionRef = firestore.collection(collectionKey);

   console.log(collectionRef);

   const batch = firestore.batch();

   objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
   });

   return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
   const tranformedCollection = collections.docs.map(doc => {
      const { title, items } = doc.data();

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items
      };
   });

   return tranformedCollection.reduce((accumulater, collection) => {
      accumulater[collection.title.toLowerCase()] = collection;

      return accumulater;
   }, {});
};

export const getCurrentUser = () => {
   return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
         unsubscribe();
         resolve(userAuth);
      }, reject);
   });
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
