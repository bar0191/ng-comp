import React, { PureComponent } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './Nav';

class Header extends PureComponent {
  render() {
    return (
      <header className="site-head">
        <MobileNav />
        <DesktopNav />
      </header>
    );
  }
}

export default Header;
