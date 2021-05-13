import React, { Component } from 'react';
import MovieList from '../../components/MovieList';
import ApiService from '../../services/ApiService';
import s from './MoviesPages.module.css';
const apiService = new ApiService();

class MoviesPage extends Component {
  state = {
    userSearchTerm: '',
    movies: [],
    isLoading: false,
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
    this.fetchMovies();
  };

  fetchMovies = () => {
    this.setState({ isLoading: true });
    apiService
      .getMoviesOnSearch(this.state.userSearchTerm)
      .then(data => {
        this.setState({
          movies: data,
        });
      })
      .catch(e => console.log(e))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <form className={s.SearchForm}>
          <input
            className={s.input}
            type="text"
            onChange={this.onInputChange}
          />
          <button
            type="submit"
            className={s.searchBtn}
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
