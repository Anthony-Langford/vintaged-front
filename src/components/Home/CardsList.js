import React from 'react'

// Import components
import ProductCard from './ProductCard'

function CardsList(props) {
  const wines = props.wines;

  return wines.map(wine => 
    <ProductCard wine={wine} key={wine.id} />
  )
}

export default CardsList