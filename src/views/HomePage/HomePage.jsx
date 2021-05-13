import { Component } from 'react';
import MovieList from '../../components/MovieList';
import ApiService from '../../services/ApiService';

const apiService = new ApiService();

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  componentDidMount() {
    this.fetchTrading();
    localStorage.clear();
  }

  fetchTrading = () => {
    this.setState({ isLoading: true });
    apiService
      .getTradingMovies()
      .then(data => {
        this.setState({ movies: data });
      })
      .catch(e => console.log(e.message))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <div>
        <h2>Trending today</h2>
        {this.state.isLoading && <p>Loading...</p>}
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default HomePage;
