import React from 'react'
import PropTypes from 'prop-types'

// Import components
import ProductCard from './ProductCard'

function ProductCardsList(props) {
  const wines = props.wines;

  return (
    <div
      label="ProductCardsList"
      css={`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {wines.map(wine => 
        <ProductCard wine={wine} key={wine.id} />
      )}
    </div>
  )
}

// Static type checking for props
ProductCardsList.propTypes = {
  wines: PropTypes.array.isRequired,
}

export default ProductCardsList