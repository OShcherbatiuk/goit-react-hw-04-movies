import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink to={routes.HomePage}>Home</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to={routes.MoviesPage}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
