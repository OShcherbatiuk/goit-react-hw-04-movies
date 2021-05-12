import { Component } from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import Axios from 'axios';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';

import s from './MovieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    movies: [],
    genres: [],
  };

  async componentDidMount() {
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
    const searchQuery = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=${KEY}&language=en-US`;
    const response = await Axios.get(searchQuery);

    this.setState({
      movies: response.data,
      genres: response.data.genres,
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.HomePage);

    // history.push(location?.state?.from || routes.HomePage);
  };

  render() {
    const { match, location } = this.props;
    const { movies, genres } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={s.container}>
          <div className="BookPreview-thumb">
            <img
              src={`https://image.tmdb.org/t/p/w300${this.state.movies.poster_path}`}
              alt=""
            />
          </div>
          <div>
            <h1>
              {movies.title} ({new Date(movies.release_date).getFullYear()})
            </h1>
            <p>User score: {movies.vote_average}</p>
            <h2>Overview</h2>
            <p>{movies.overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.info}>
          <p>Aditional infomation</p>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from: location,
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from: location,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);
