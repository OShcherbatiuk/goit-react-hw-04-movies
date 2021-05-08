import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    userSearchTerm: '',
    movies: [],
  };

  onInputChange = e => {
    this.setState({ userSearchTerm: e.target.value });
  };

  onInputSubmit = e => {
    e.preventDefault();

    const movieName = this.state.userSearchTerm;
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';

    const searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${movieName}&page=10`;

    axios.get(searchQuery).then(res => {
      this.setState({ movies: res.data.results });
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onInputSubmit}>
          <input type="text" onChange={this.onInputChange} />
        </form>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
