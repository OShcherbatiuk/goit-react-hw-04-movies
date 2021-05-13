import { NavLink } from 'react-router-dom';
import routes from '../../routes';

import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.siteNav}>
      <NavLink
        exact
        to={routes.HomePage}
        activeClassName={s.active}
        className={s.navLink}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.MoviesPage}
        activeClassName={s.active}
        className={s.navLink}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
