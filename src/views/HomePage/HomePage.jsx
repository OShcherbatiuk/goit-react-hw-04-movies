import { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  state = {
    movie: [],
  };
  async componentDidMount() {
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
    const searchQuery = `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`;
    const response = await Axios.get(searchQuery);

    this.setState({ movie: response.data.results });
  }

  render() {
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {this.state.movie.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
