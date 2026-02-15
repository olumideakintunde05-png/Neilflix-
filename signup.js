import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("signupForm");
const errorText = document.getElementById("signupError");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await sendEmailVerification(userCredential.user);

    alert("Verification email sent. Check your inbox.");
    window.location.href = "login.html";

  } catch (error) {
    errorText.textContent = error.message;
  }
});

























import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = auth.currentUser;

    if (user) {
      await sendEmailVerification(user);
      alert("Verification email sent. Check Spam too.");
      window.location.href = "login.html";
    } else {
      alert("User not available yet. Try again.");
    }

  } catch (error) {
    alert(error.message);
  }
});