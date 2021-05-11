import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import NotFoundView from './views/NotFoundView';
import AppBar from './components/AppBar';
import routes from './routes';
import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('./views/HomePage' /*webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /*webpackChunkName: "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /*webpackChunkName: "movie-details-page"*/),
);

const App = () => (
  <>
    <AppBar />
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
        <Route exact path={routes.HomePage} component={HomePage} />
        <Route exact path={routes.MoviesPage} component={MoviesPage} />
        <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
