import React from 'react'
import PropTypes from 'prop-types'

// Import components
import ProductCard from './ProductCard'

function ProductCardsList(props) {
  const wines = props.wines
  const filteredWines = wines.filter(wine => wine.store_LAPI[0].quantity > 0).slice(0, 5)

  return (
    <div
      label="ProductCardsList"
      css={`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {filteredWines.map(wine => <ProductCard wine={wine} key={wine.id} />)}
    </div>
  )
}

// Static type checking for props
ProductCardsList.propTypes = {
  wines: PropTypes.array.isRequired,
}

export default ProductCardsList