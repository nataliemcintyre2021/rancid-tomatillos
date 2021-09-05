export const cleanData = (data) => {
  data.movie.release_date = cleanDateData(data)
  data.movie.genres = cleanGenreData(data)
  data.movie.average_rating = cleanRatingData(data)
  return data
}

const cleanDateData = (data) => {
  const newDate = data.movie.release_date.slice(0, 4)
  return newDate
}

const cleanGenreData = (data) => {
  const newGenres = data.movie.genres.join(", ")
  return newGenres
}

const cleanRatingData = (data) => {
  const newRating = ((data.movie.average_rating/10)*100).toFixed(0)
  return newRating
}
