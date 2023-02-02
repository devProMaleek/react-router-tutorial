import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

const MainNavigation = props => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

MainNavigation.propTypes = {}

export default MainNavigation