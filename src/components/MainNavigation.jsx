import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive && classes.active} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => isActive && classes.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

MainNavigation.propTypes = {};

export default MainNavigation;
