export const getAllMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
     .then(response => response.json())
}

export const fetchSingleMoviePoster = (id) => {
console.log("clickedPosterID", id)
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
   .then(response => response.json())
}
