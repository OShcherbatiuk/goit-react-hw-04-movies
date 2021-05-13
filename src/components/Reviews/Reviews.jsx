import { Component } from 'react';
import Axios from 'axios';

import s from './Rewiews.module.css';

class Reviews extends Component {
  state = { reviews: [] };

  async componentDidMount() {
    const KEY = '455a0ddf1ae97a91f0c666d83d1a7d1f';
    const searchQuery = `https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}/reviews?api_key=${KEY}&language=en-US&page=1`;
    const response = await Axios.get(searchQuery);

    this.setState({ reviews: response.data.results });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { reviews } = this.state;
    const isReviews = reviews.length;
    return (
      <div>
        {isReviews ? (
          <ul className={s.reviewsList}>
            {reviews.map(review => (
              <li key={review.id} className={s.reviewsItem}>
                <p className={s.reviewAuthor}>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    );
  }
}

export default Reviews;
