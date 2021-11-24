import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYaAL_KMqKh8rZIoOKZp0zbgE0WcGsCyE",
  authDomain: "tann-mann-project-44b7a.firebaseapp.com",
  projectId: "tann-mann-project-44b7a",
  storageBucket: "tann-mann-project-44b7a.appspot.com",
  messagingSenderId: "633967152841",
  appId: "1:633967152841:web:cba8aedde67ef967f70718",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
