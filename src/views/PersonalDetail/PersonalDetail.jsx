import { Component } from 'react';
import img from '../../img/no-img.jpg';
import ApiService from '../../services/ApiService';

// import s from './PersonalDetail.module.css';

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
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300/${profile_path}` || img}
          alt=""
          className="{s.profImg}"
        />
        <p>{name}</p>
        <p>Birthday: {birthday} (полных лет)</p>
        <p>Place of birth: {place_of_birth}</p>
        <p>Raiting: {popularity}</p>
        <p>Biography: {biography}</p>
      </div>
    );
  }
}

export default PersonalDetail;
