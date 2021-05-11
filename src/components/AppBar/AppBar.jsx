import Navigation from '../Navigation';

import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.AppBar}>
      <Navigation />
    </header>
  );
};

export default AppBar;
