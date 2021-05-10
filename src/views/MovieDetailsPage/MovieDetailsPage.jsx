import { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Axios from 'axios';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    genres: [],
  };

  async componentDidMount() {
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
    const searchQuery = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${KEY}&language=en-US`;
    const response = await Axios.get(searchQuery);

    this.setState({ movie: response.data, genres: response.data.genres });
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <button type="button">Go back</button>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`}
            alt=""
          />
          <h1>
            {this.state.movie.title} (
            {new Date(this.state.movie.release_date).getFullYear()})
          </h1>
          <p>User score: {this.state.movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{this.state.movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {this.state.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
        <p>Aditional infomation</p>
        <ul>
          <li>
            <NavLink to={`${match.url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>
        <div>
          <Switch>
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
