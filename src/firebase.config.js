import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCLZO-uXuh36yhMemQUYOsRgbLgcaEvs54',
  authDomain: 'house-marketplace-622eb.firebaseapp.com',
  projectId: 'house-marketplace-622eb',
  storageBucket: 'house-marketplace-622eb.appspot.com',
  messagingSenderId: '1034115419210',
  appId: '1:1034115419210:web:3c78c99ac85ad77677eab3',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
