import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

const Productpage = (props) => {
  const PRODUCTS = [
    { id: 'p1', title: 'Book 1', price: 6 },
    { id: 'p2', title: 'Book 2', price: 6 },
    { id: 'p3', title: 'Book 3', price: 6 },
    { id: 'p4', title: 'Book 4', price: 6 },
    { id: 'p5', title: 'Book 5', price: 6 },
  ];

  return (
    <div>
      <h1>My Productpage</h1>
      <ul>
        {PRODUCTS.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

Productpage.propTypes = {};

export default Productpage;
