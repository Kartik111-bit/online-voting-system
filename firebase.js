import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyBmFPRYoI6hh2FSYUpY6Udgi5fJZa3MZ3k",
    authDomain: "voting-system-f707a.firebaseapp.com",
    projectId: "voting-system-f707a",
    storageBucket: "voting-system-f707a.firebasestorage.app",
    messagingSenderId: "659623420722",
    appId: "1:659623420722:web:b7be86181845225d4c2d2b",

};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);