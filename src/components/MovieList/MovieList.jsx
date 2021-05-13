import { Link, withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import img from '../../img/no-img.jpg';

import s from './MovieList.module.css';

const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.previewList}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={s.previewItem}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <div className="wrapper">
              <img
                className={s.previewImg}
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : img
                }
                alt=""
              />
              <h3>{title}</h3>
            </div>
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
