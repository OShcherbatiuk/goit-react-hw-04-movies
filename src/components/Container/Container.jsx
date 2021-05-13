import { Component } from 'react';
import s from './Container.module.css';

class Container extends Component {
  render() {
    return <div className={s.container}>{this.props.children}</div>;
  }
}

export default Container;
