import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const { productId } = useParams()


  return (
    <>
      <h1>Product Details Page</h1>
      <p>Product ID: {productId}</p>
    </>
  )
}

export default ProductDetailsPage
