import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyC_olfFk3Yqe2np0-fsKqR5y70cO-100CQ',
  authDomain: 'bbh-web-eb9c9.firebaseapp.com',
  projectId: 'bbh-web-eb9c9',
  storageBucket: 'bbh-web-eb9c9.appspot.com',
  messagingSenderId: '988103720354',
  appId: '1:988103720354:web:0a879e570467d8f8fc86fb',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
