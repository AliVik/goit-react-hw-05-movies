import axios from 'axios';

const API_KEY = '0f75883a5b022cff2e3a270026da46a3';
const API_URL = 'https://api.themoviedb.org/3';

async function getTrendingMoviesFromAPI() {
  const response = await axios.get(
    `${API_URL}/trending/all/day?api_key=${API_KEY}&language=en`
  );
  return response.data.results;
}
export default getTrendingMoviesFromAPI;
