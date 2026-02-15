// ====== search.js ======

// Save movie to localStorage
function saveMovie(title, poster, link) {
  const saved = JSON.parse(localStorage.getItem("savedMovies")) || [];

  // Avoid duplicates
  if (!saved.some(m => m.title === title)) {
    saved.push({ title, poster, link });
    localStorage.setItem("savedMovies", JSON.stringify(saved));
    alert(`${title} saved to your list!`);
  } else {
    alert(`${title} is already in your list.`);
  }
}

// Expose function globally so buttons in HTML can call it
window.saveMovie = saveMovie;

// Search functionality
const searchInput = document.getElementById("searchinput");
const movieCards = document.querySelectorAll(".movie-card");

searchInput.addEventListener("input", function() {
  const query = searchInput.value.toLowerCase();

  movieCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();

    // Show/hide card based on search
    if (title.includes(query)) {
      card.style.display = "block";
      card.style.border = "3px solid red"; // highlight
    } else {
      card.style.display = "none";
      card.style.border = "none";
    }
  });

  // Remove highlight if search empty
  if (!query) {
    movieCards.forEach(card => {
      card.style.display = "block";
      card.style.border = "none";
    });
  }
});