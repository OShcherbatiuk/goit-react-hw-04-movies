import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={routes.HomePage}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.MoviesPage}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
