import React, { PureComponent } from 'react';
import featuredBackground from '../static/img/featured-prod.svg';

export default class Products extends PureComponent {
  createProducts = () => {
    let products = [];

    let featuredProduct = (
      <div className="product-grid__featured">
        <div className="product-grid__featured-item">
          <img
            className="product-grid__item-image foreground"
            src="https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_310x.jpg?v=1541716809"
            srcSet="https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_310x.jpg?v=1541716809 310w, https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_620x.jpg?v=1541716809 620w, https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_600x.jpg?v=1541716809 600w, https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_1200x.jpg?v=1541716809 1200w"
            sizes="50vw, (min-width: 850px) 310px"
            alt=""
          />
          <img
            className="product-grid__item-image background"
            src={featuredBackground}
            sizes="50vw, (min-width: 850px) 310px"
            alt=""
          />
        </div>
        <span className="product-grid__item-description">
          <span className="product-grid__item-price">$85.00 - </span>
          Expensive Product{' '}
        </span>
      </div>
    );

    products.push(featuredProduct);

    for (let i = 0; i < 10; i++) {
      products.push(
        <div className="product-grid__item">
          <img
            className="product-grid__item-image"
            src="https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_310x.jpg?v=1541716809"
            srcSet="https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_310x.jpg?v=1541716809 310w, https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_620x.jpg?v=1541716809 620w, https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_600x.jpg?v=1541716809 600w, https://cdn.shopify.com/s/files/1/0061/7693/1938/products/custom_resized_10144d58-7ce0-40d3-b770-f3e90d790407_1200x.jpg?v=1541716809 1200w"
            sizes="50vw, (min-width: 850px) 310px"
            alt=""
          />
          <span className="product-grid__item-description">
            <span className="product-grid__item-price">$85.00 - </span>
            Expensive Product{' '}
          </span>
        </div>
      );
    }

    return products;
  };

  render() {
    return <div className="product-grid">{this.createProducts()}</div>;
  }
}
