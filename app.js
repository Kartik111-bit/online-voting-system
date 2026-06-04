import { auth } from "./firebase.js";

import {

createUserWithEmailAndPassword,

signInWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const registerBtn = document.getElementById("registerBtn");

const loginBtn = document.getElementById("loginBtn");

// REGISTER USER
registerBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try{

        await createUserWithEmailAndPassword(auth, email, password);

        alert("Registration Successful");

    }

    catch(error){

        alert(error.message);

    }

});

// LOGIN USER
loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try{

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login Successful");

        window.location.href = "vote.html";

    }

    catch(error){

        alert(error.message);

    }

});