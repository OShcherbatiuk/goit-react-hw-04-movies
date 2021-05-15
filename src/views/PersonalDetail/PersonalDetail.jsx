import { Component } from 'react';
import img from '../../img/no-img.jpg';
import ApiService from '../../services/ApiService';
import routes from '../../routes';

import s from './PersonalDetail.module.css';

const apiService = new ApiService();

class PersonalDetail extends Component {
  state = {
    biography: '',
    birthday: '',
    name: '',
    place_of_birth: '',
    popularity: '',
    profile_path: '',
  };

  componentDidMount() {
    this.fetchPerson();
  }
  fetchPerson = () => {
    const { personId } = this.props.match.params;
    apiService
      .getPersonalDetail(personId)
      .then(
        ({
          biography,
          birthday,
          name,
          place_of_birth,
          popularity,
          profile_path,
        }) => {
          this.setState({
            biography,
            birthday,
            name,
            place_of_birth,
            popularity,
            profile_path,
          });
        },
      );
  };

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.HomePage);

    // history.push(location?.state?.from || routes.HomePage);
  };

  render() {
    console.log(this.state);
    const {
      biography,
      birthday,
      name,
      place_of_birth,
      popularity,
      profile_path,
    } = this.state;

    return (
      <>
        <button type="button" className={s.backBtn} onClick={this.handleGoBack}>
          Go back
        </button>
        <div className={s.personalDetails}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${profile_path}` || img}
            alt=""
            className={s.profPoster}
          />
          <div className={s.description}>
            <p className={s.detail}>{name}</p>
            <p className={s.detail}>Birthday: {birthday} (полных лет)</p>
            <p className={s.detail}>Place of birth: {place_of_birth}</p>
            <p className={s.detail}>Raiting: {popularity}</p>
            <p className={s.detail}>Biography: {biography}</p>
          </div>
        </div>
      </>
    );
  }
}

export default PersonalDetail;
