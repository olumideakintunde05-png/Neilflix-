function saveMovie(title, image, link) {
  // 🔒 must be logged in
  if (localStorage.getItem("loggedIn") !== "true") {
    alert("Please login to save movies");
    window.location.href = "login.html";
    return;
  }

  let saved = JSON.parse(localStorage.getItem("savedMovies")) || [];

  // prevent duplicates
  if (saved.some(movie => movie.title === title)) {
    alert("Already saved");
    return;
  }

  saved.push({ title, image, link });
  localStorage.setItem("savedMovies", JSON.stringify(saved));

  alert("Saved to your profile ❤️");
}