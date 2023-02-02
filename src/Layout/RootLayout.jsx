import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import classes from './RootLayout.module.css';

const RootLayout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};

RootLayout.propTypes = {};

export default RootLayout;
