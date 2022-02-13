import axios from 'axios';

const API_KEY = '0f75883a5b022cff2e3a270026da46a3';
const API_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMoviesFromAPI() {
  const response = await axios.get(
    `${API_URL}/trending/all/day?api_key=${API_KEY}&language=en`
  );

  return response.data.results.filter(result => result.original_title);
}

export async function getMovieById(movieId) {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
}

export async function getMovieCast(movieId) {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function getMovieByQuery(query, page) {
  const response = await axios.get(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
  return response.data;
}
