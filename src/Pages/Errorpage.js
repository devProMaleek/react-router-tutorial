import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Link } from 'react-router-dom';

const Errorpage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occurred</h1>
        <p>Could not find this page</p>
        <p>
          Go to <Link to="/">Home</Link>
        </p>
      </main>
    </>
  );
};

export default Errorpage;
