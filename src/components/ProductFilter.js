import React, { PureComponent } from 'react';
import ArrowDown from '../static/icons/down-arrow.svg';

export default class ProductFilter extends PureComponent {
  render() {
    return (
      <div className="product-filter">
        <div className="product-filter__dropdown">
          <img src={ArrowDown} alt="" />
          <span className="product-filter__dropdown-main">All</span>
        </div>
      </div>
    );
  }
}
