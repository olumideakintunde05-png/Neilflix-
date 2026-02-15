const saveButtons = document.querySelectorAll(".save-btn");

let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];

saveButtons.forEach(btn => {
  const card = btn.closest(".movie-card");
  const title = card.dataset.title;

  // Already saved?
  if (savedMovies.some(movie => movie.title === title)) {
    btn.textContent = "✓ Saved";
    btn.classList.add("saved");
  }

  btn.addEventListener("click", () => {
    if (savedMovies.some(movie => movie.title === title)) return;

    const movie = {
      title: card.dataset.title,
      img: card.dataset.img,
      link: card.dataset.link
    };

    savedMovies.push(movie);
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));

    btn.textContent = "✓ Saved";
    btn.classList.add("saved");
  });
});