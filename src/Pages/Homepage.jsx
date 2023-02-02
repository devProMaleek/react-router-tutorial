import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

const Homepage = props => {
  return (
    <div>
      <h1>My Homepage</h1>
      <p>Go to the <Link to="/products">list of products</Link></p>
    </div>
  )
}

Homepage.propTypes = {}

export default Homepage