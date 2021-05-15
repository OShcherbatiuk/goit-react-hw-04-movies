import { Component } from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/no-img.jpg';
import ApiService from '../../services/ApiService';

import s from './Cast.module.css';

const apiService = new ApiService();

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    this.fetchCast();
  }
  fetchCast = () => {
    const { movieId } = this.props.match.params;
    apiService.getMovieCredits(movieId).then(data => {
      data = data.map(el => {
        if (el.profile_path) {
          el.profile_path = `https://image.tmdb.org/t/p/w300/${el.profile_path}`;
        }
        return { ...el };
      });
      this.setState({
        cast: data,
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

  render() {
    const { location } = this.props;
    const { cast } = this.state;
    const isCast = cast.length;
    return (
      <div>
        {isCast ? (
          <ul className={s.castList}>
            {cast.map(cast => (
              <li key={cast.id} className={s.castItem}>
                <Link
                  to={{
                    pathname: `/person/${cast.id}`,
                    state: {
                      from: location,
                    },
                  }}
                >
                  <img
                    src={cast.profile_path || img}
                    alt=""
                    className={s.castImg}
                  />
                  {cast.name} <p>Character: {cast.character}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any cast for this movie.</p>
        )}
      </div>
    );
  }
}

export default Cast;
