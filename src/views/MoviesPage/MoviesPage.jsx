import React, { Component } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList';

import s from './MoviesPages.module.css';

class MoviesPage extends Component {
  state = {
    userSearchTerm: '',
    movies: [],
  };

  componentDidMount() {
    const savedMovies = localStorage.getItem('movies');
    const parsedMovies = JSON.parse(savedMovies);
    if (parsedMovies) {
      this.setState({ movies: parsedMovies });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.movies !== prevState.movies) {
      localStorage.setItem('movies', JSON.stringify(this.state.movies));
    }
  }

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
    const { movies } = this.state;
    console.log(this.state);
    return (
      <div>
        <form className={s.SearchForm}>
          <input
            className={s.SearchForm_input}
            type="text"
            onChange={this.onInputChange}
          />
          <button
            type="submit"
            className={s.SearchForm_button}
            onClick={this.onInputSubmit}
          >
            <span className={s.SearchForm_button_label}>Search</span>
          </button>
        </form>
        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;
