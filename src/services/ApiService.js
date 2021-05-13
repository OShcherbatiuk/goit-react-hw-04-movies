import axios from 'axios';
const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiService {
  async getTradingMovies() {
    const response = await axios.get(`/trending/all/week?api_key=${KEY}`);
    return response.data.results;
  }

  async getMoviesOnSearch(query) {
    const response = await axios.get(
      `/search/movie?api_key=${KEY}&query=${query}`,
    );
    return response.data.results;
  }
  async getMovieById(movieId) {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY}`);
    return response.data;
  }
  async getMovieCredits(movieId) {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${KEY}`,
    );
    return response.data.cast;
  }
  async getMovieReviews(movieId) {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${KEY}`,
    );
    return response.data.results;
  }
}
