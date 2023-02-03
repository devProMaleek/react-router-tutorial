import React from 'react'
import PropTypes from 'prop-types'

import { Link, useNavigate } from 'react-router-dom'

const Homepage = props => {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/products')
  }
  return (
    <div>
      <h1>My Homepage</h1>
      <p>Go to the <Link to="/products">list of products</Link></p>
      <button  onClick={navigateHandler}>Navigate to Products</button>
    </div>
  )
}

Homepage.propTypes = {}

export default Homepage