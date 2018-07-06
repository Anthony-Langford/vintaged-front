import React from 'react'
import PropTypes from 'prop-types'

// Import components
import ProductCard from './ProductCard'

export default function ProductCardsList({
  wines
}) {

  // Filter by store-specific inventory data if possible
  // const filteredWines = wines[0].store_LAPI ?
  //   wines.filter(wine => wine.store_LAPI[0].quantity > 0).slice(0, 5) :
  //   wines.slice(0, 5)

  const filteredWines = wines.slice(0, 5)

  return(
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