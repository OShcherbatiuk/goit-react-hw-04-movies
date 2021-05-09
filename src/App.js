import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';
import NotFoundView from './views/NotFoundView';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

const App = () => (
  <>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={MoviesPage} />
      <Route exact path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
