import Navigation from '../Navigation';
import Container from '../Container/Container';

import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};

export default AppBar;
