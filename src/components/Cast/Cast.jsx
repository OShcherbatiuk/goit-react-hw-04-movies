import { Component } from 'react';
import Axios from 'axios';

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
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.cast.map(cast => (
            <li key={cast.id}>
              {/* <img
                src=""
                alt=""
              /> */}
              {cast.name} <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
