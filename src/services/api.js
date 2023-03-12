import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { db } from './firebase';

// Add a new document in collection "database"
export const addData = async (data) => {
  try {
    const docRef = doc(collection(db, 'database'));
    const res = await setDoc(docRef, data);

    return res;
  } catch (e) {
    console.error('Error adding document: ', e);

    return e;
  }
};

// Query a document from collection "database" using phoneNumber

export const getData = async (phoneNumber) => {
  let returnId = '';
  const q = query(
    collection(db, 'database'),
    where('phoneNumber', '==', phoneNumber)
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    returnId = doc.id;
    return returnId;
  });

  return returnId;
};

// Get all documents from collection "database"
export const getAllData = async () => {
  const allData = [];
  const ref = collection(db, 'database');

  const querySnapshot = await getDocs(ref);
  querySnapshot.forEach((doc) => {
    const newObject = {
      id: doc.id,
      ...doc.data(),
    };
    allData.push(newObject);

    return allData;
  });

  return allData;
};
