import React, { PureComponent } from 'react';
import BagIcon from '../static/icons/bag.svg';
import SearchIcon from '../static/icons/search.svg';

export default class Nav extends PureComponent {
  render() {
    return (
      <div className="nav">
        <ul className="list">
          <li className="nav__link list__search">
            <img src={SearchIcon} alt="" />
          </li>
          <li className="nav__link">
            <a>Goods.</a>
          </li>
          <li className="nav__link">
            <a>Collections.</a>
          </li>
          <li className="nav__link">
            <a>Stories.</a>
          </li>
          <li className="nav__link">
            <a>Brands.</a>
          </li>
        </ul>
        <div className="logo">
          <a className="nav__link">Neighborhood Goods</a>
        </div>
        <div className="bag">
          <a>Sign In</a>
          <img className="nav__link" src={BagIcon} alt=" " />
        </div>
      </div>
    );
  }
}
