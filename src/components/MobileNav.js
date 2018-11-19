import React, { PureComponent } from 'react';
import SignInIcon from '../static/icons/user.svg';
import HamburgerIcon from '../static/icons/hamburger.svg';
import SearchIcon from '../static/icons/search.svg';
import BagIcon from '../static/icons/bag-outline.svg';

export default class MobileNav extends PureComponent {
  render() {
    return (
      <div className="mobileNav">
        <div className="user-login">
          <img src={SignInIcon} alt=" " />
        </div>
        <div className="utility-bar">
          <div className="utility-bar__hamburger">
            <img src={HamburgerIcon} alt="" />
          </div>
          <div className="utility-bar__search">
            <img
              className="utility-bar__search__icon"
              src={SearchIcon}
              alt=" "
            />
            <span className="utility-bar__search__input">Search</span>
          </div>
        </div>
        <div className="bag">
          <img src={BagIcon} alt=" " />
        </div>
      </div>
    );
  }
}
