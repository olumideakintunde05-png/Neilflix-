import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// === PROTECT PAGE ===
onAuthStateChanged(auth, (user) => {
  if (user && user.emailVerified) {
    document.getElementById("userEmail").textContent = user.email;
    loadSavedTrailers();
  } else {
    // Not logged in or not verified → redirect to login
    window.location.href = "login.html";
  }
});

// === LOGOUT ===
document.getElementById("logoutBtn").addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "login.html";
});

// === LOAD SAVED TRAILERS FROM localStorage ===
function loadSavedTrailers() {
  const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];
  const container = document.getElementById("savedMovies");

  container.innerHTML = ""; // clear previous
  saved.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("movie-card");

    div.innerHTML = `
      <a href="${movie.link}" target="_blank">
        <img src="${movie.img}" alt="${movie.title}">
        <h4>${movie.title}</h4>
      </a>
    `;
    container.appendChild(div);
  });

  if (saved.length === 0) {
    container.innerHTML = "<p>No trailers saved yet.</p>";
  }
}