import { Component } from 'react';
import ApiService from '../../services/ApiService';

import s from './Rewiews.module.css';
const apiService = new ApiService();

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = () => {
    const id = this.props.match.params.movieId;
    apiService.getMovieReviews(id).then(data => {
      this.setState({
        reviews: data,
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    });
  };

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
