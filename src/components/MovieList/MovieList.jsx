import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape),
};

export default withRouter(MovieList);
