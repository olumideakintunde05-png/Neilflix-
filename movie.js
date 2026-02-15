// js/movies.js
export const movies = [
  {
    title: "Inception",
    poster: "images/inception.jpg",
    link: "downloads/inception.html",
    trailer: "https://www.youtube.com/embed/cdx31ak4KbQ"
  },
  {
    title: "Interstellar",
    poster: "images/interstellar.jpg",
    link: "downloads/interstellar.html",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    title: "The Dark Knight",
    poster: "images/darkknight.jpg",
    link: "downloads/darkknight.html",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    title: "Avatar",
    poster: "images/avatar.jpg",
    link: "downloads/avatar.html",
    trailer: "https://www.youtube.com/embed/5PSNL1qE6VY"
  },
  {
    title: "Titanic",
    poster: "images/titanic.jpg",
    link: "downloads/titanic.html",
    trailer: "https://www.youtube.com/embed/kVrqfYjkTdQ"
  },
  // Auto-generate movies 6–100
  ...Array.from({ length: 95 }, (_, i) => {
    const index = i + 6;
    return {
      title: `Movie ${index}`,
      poster: `images/movie${index}.jpg`,
      link: `downloads/movie${index}.html`,
      trailer: `https://www.youtube.com/embed/trailer${index}`
    };
  })
];
  
 














export const movies = [
  {
    title: "Inception",
    poster: "inception.jpg",
    link:"https://archive.org/details/youtube-oXIeVPCa_d0",
    trailer: "https://www.youtube.com/embed/cdx31ak4KbQ"
  }
];