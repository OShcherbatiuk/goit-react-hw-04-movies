import { Component } from 'react';
import Axios from 'axios';
class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
    const searchQuery = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;
    const response = await Axios.get(searchQuery);

    this.setState({ reviews: response.data.results });
    console.log(this.state);
  }

  render() {
    return (
      <ul>
        {this.state.reviews.map(review => (
          <li key={review.id}>
            Author: {review.author} <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Reviews;
