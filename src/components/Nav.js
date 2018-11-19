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
          <li>
            <a className="nav__link" href="#">Goods.</a>
          </li>
          <li>
            <a className="nav__link" href="#">Collections.</a>
          </li>
          <li>
            <a className="nav__link" href="#">Stories.</a>
          </li>
          <li>
            <a className="nav__link" href="#">Brands.</a>
          </li>
        </ul>
        <div className="logo">
          <a href="#" className="nav__link">
            Neighborhood Goods
          </a>
        </div>
        <div className="bag">
          <a className="nav__link" href="#">Sign In</a>
          <img className="nav__link" src={BagIcon} alt=" " />
        </div>
      </div>
    );
  }
}
