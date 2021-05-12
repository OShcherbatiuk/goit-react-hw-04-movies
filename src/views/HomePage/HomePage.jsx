import { Component } from 'react';
import MovieList from '../../components/MovieList';
import Axios from 'axios';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
    const searchQuery = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
    const response = await Axios.get(searchQuery);
    this.setState({ movies: response.data.results });
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;
