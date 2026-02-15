alert("login.js is connected");

import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const rememberMe = document.getElementById("rememberMe");
const errorMsg = document.getElementById("errorMsg");
const forgotMsg = document.getElementById("forgotMsg");
const forgotPassword = document.getElementById("forgotPassword");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    const persistence = rememberMe.checked
      ? browserLocalPersistence
      : browserSessionPersistence;

    await setPersistence(auth, persistence);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    if (!user.emailVerified) {
      errorMsg.textContent = "Please verify your email first!";
      return;
    }

    // ✅ SUCCESS
    window.location.href = "profile.html";

  } catch (error) {
    errorMsg.textContent = error.message;
  }
});

forgotPassword.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = prompt("Enter your email to reset password:");
  if (!email) return;

  try {
    await sendPasswordResetEmail(auth, email);
    forgotMsg.textContent = "Password reset email sent!";
    errorMsg.textContent = "";
  } catch (error) {
    errorMsg.textContent = error.message;
  }
});