document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      window.location.href = "profile.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("loggedIn", "true");
      window.location.href = "profile.html";
    });
  }
});





import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  sendEmailVerification, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// === SIGN UP ===
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  const signupError = document.getElementById("signupError");
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      alert("Verification email sent! Please check your inbox.");
      window.location.href = "login.html"; // redirect to login
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        signupError.textContent = "Email is already in use!";
      } else if (error.code === "auth/invalid-email") {
        signupError.textContent = "Invalid email!";
      } else if (error.code === "auth/weak-password") {
        signupError.textContent = "Password should be at least 6 characters!";
      } else {
        signupError.textContent = error.message;
      }
    }
  });
}

// === LOGIN ===
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  const errorMsg = document.getElementById("errorMsg");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user.emailVerified) {
        errorMsg.textContent = "Please verify your email first!";
      } else {
        window.location.href = "profile.html";
      }
    } catch (error) {
      if (error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
        errorMsg.textContent = "Email or password is incorrect!";
      } else {
        errorMsg.textContent = error.message;
      }
    }
  });
}

// === FORGOT PASSWORD ===
const forgotPassword = document.getElementById("forgotPassword");
if (forgotPassword) {
  forgotPassword.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = prompt("Enter your email to reset password:");
    if (!email) return;

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      alert(error.message);
    }
  });
}