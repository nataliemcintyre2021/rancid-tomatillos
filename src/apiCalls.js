export const getAllMovies = () => {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
     .then(response => checkForErrors(response))
}

export const fetchSingleMoviePoster = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
   .then(response => checkForErrors(response))
}

export const checkForErrors = (response) => {
  if (!response.ok) {
    throw new Error(`${response.status} - something went wrong. ${response.statusText}`);
  }
  console.log("RESPONSE", response)
  return response.json()
}
