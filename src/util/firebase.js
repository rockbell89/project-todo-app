import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_FIREBASE_APP_KEY,
  authDomain: 'todo-app-fa83b.firebaseapp.com',
  projectId: 'todo-app-fa83b',
  storageBucket: 'todo-app-fa83b.appspot.com',
  messagingSenderId: '586841415305',
  appId: '1:586841415305:web:af21ba96ac5bcb7557b058',
};

const app = initializeApp(firebaseConfig);
export default getFirestore(app);
