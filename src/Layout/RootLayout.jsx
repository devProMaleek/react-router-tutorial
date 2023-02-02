import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

RootLayout.propTypes = {};

export default RootLayout;
