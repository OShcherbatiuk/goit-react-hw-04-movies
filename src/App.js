import { NavLink, Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import Cast from './views/Cast';
import Reviews from './views/Reviews';
import NotFoundView from './views/NotFoundView';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
      <li>
        <NavLink to="/movies/:movieId">MovieDetailsPage</NavLink>
      </li>
      <li>
        <NavLink to="/movies/:movieId/cast">Cast</NavLink>
      </li>
      <li>
        <NavLink to="/movies/:movieId/reviews">Reviews</NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route path="/movies/:movieId/cast" component={Cast} />
      <Route path="/movies/:movieId/reviews" component={Reviews} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
