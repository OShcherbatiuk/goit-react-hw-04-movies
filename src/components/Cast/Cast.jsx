import { Component } from 'react';
import Axios from 'axios';

import s from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
    const searchQuery = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/credits?api_key=${KEY}&language=en-US`;
    const response = await Axios.get(searchQuery);

    this.setState({
      cast: response.data.cast,
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  render() {
    const { cast } = this.state;
    const isCast = cast.length;
    return (
      <div>
        {isCast ? (
          <ul className={s.castList}>
            {cast.map(cast => (
              <li key={cast.id} className={s.castItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w138_and_h175_bestv2/${cast.profile_path}`}
                  alt=""
                  className={s.castImg}
                />
                {cast.name} <p>Character: {cast.character}</p>
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
