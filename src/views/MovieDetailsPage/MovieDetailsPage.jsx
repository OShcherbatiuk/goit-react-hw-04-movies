import { Component, Suspense } from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import img from '../../img/no-img.jpg';

import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import routes from '../../routes';
import ApiService from '../../services/ApiService';

import s from './MovieDetailsPage.module.css';

const apiService = new ApiService();

class MovieDetailsPage extends Component {
  state = {
    genres: '',
    overview: '',
    poster_path: '',
    title: '',
    vote_average: '',
    release_date: '',
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    apiService
      .getMovieById(movieId)
      .then(
        ({
          genres,
          overview,
          poster_path,
          title,
          vote_average,
          release_date,
        }) => {
          if (genres) {
            genres = genres.map(el => el.name).join(', ');
          }
          if (poster_path) {
            poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`;
          }
          this.setState({
            genres,
            overview,
            poster_path,
            title,
            vote_average,
            release_date,
          });
        },
      );
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
    const {
      genres,
      overview,
      poster_path,
      title,
      vote_average,
      release_date,
    } = this.state;
    return (
      <>
        <button type="button" className={s.backBtn} onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={s.movieDetails}>
          <img className={s.moviePoster} src={poster_path || img} alt="" />
          <div className={s.description}>
            <h1 className={s.detail}>
              {title} ({new Date(release_date).getFullYear()})
            </h1>
            <p className={s.detail}>User score: {vote_average}</p>
            <h2 className={s.detail}>Overview</h2>
            <p className={s.detail}>{overview}</p>
            <h3 className={s.detail}>Genres</h3>
            <ul className={s.genres}>
              <p>{genres}</p>
            </ul>
          </div>
        </div>
        <div>
          <h3 className={s.detail}>Aditional infomation</h3>
          <ul>
            <li className={s.detail}>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from: location.state.from,
                  },
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.detail}>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from: location.state.from,
                  },
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense
          fallback={
            <Loader
              className="{s.Loader}"
              type="ThreeDots"
              color="#3f51b5"
              height={80}
              width={80}
              timeout={3000}
            />
          }
        >
          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default withRouter(MovieDetailsPage);
