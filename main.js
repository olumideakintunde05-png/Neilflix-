// js/main.js
import { movies } from "./movies.js";

const slider = document.getElementById("slider");
const searchInput = document.getElementById("search");

// render movies
movies.forEach(movie => {
  slider.innerHTML += `
    <div class="movie-card" id="${movie.id}">
      <img src="${movie.img}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <button onclick="saveMovie('${movie.id}')">❤️ Save</button>
    </div>
  `;
});

// live search
searchInput.addEventListener("input", e => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".movie-card").forEach(card => {
    card.style.border = "none";
  });
  if (!query) return;

  const match = Array.from(document.querySelectorAll(".movie-card"))
    .find(card => card.querySelector("h3").textContent.toLowerCase().includes(query));

  if (match) {
    match.scrollIntoView({ behavior: "smooth", block: "center" });
    match.style.border = "3px solid red";
  }
});

// save movie
window.saveMovie = function(id) {
  const movie = movies.find(m => m.id === id);
  const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];
  if (!saved.some(m => m.id === id)) {
    saved.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(saved));
    alert(`${movie.title} saved!`);
  }
};


















import { movies } from "./movies.js";

const slider = document.getElementById("slider");

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";

  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p class="genre">${movie.genre} | Rating: ${movie.rating} ⭐</p>
    <p class="desc">${movie.description}</p>
    <div class="card-buttons">
      <button onclick="saveMovie('${movie.id}')" class="save-btn">❤️ Save</button>
      <a href="${movie.download}" target="_blank" class="download-btn">⬇ Download</a>
      <a href="${movie.trailer}" target="_blank" class="trailer-btn">▶ Trailer</a>
    </div>
  `;

  slider.appendChild(card);
});

// Save function
window.saveMovie = function(id) {
  const movie = movies.find(m => m.id === id);
  const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];
  if (!saved.some(m => m.id === id)) {
    saved.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(saved));
    alert(`${movie.title} saved!`);
  } else {
    alert(`${movie.title} is already saved!`);
  }
};