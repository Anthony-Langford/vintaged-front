import React from 'react'
import PropTypes from 'prop-types'

// Import components
import ProductCard from './ProductCard'

export default function ProductCardsList({
  wines,
  sortKey,
  filters
}) {

  // Filter by store-specific inventory data if possible
  // const filteredWines = wines[0].store_LAPI ?
  //   wines.filter(wine => wine.store_LAPI[0].quantity > 0).slice(0, 5) :
  //   wines.slice(0, 5)

  // const filteredWines = Object.keys(filters) > 0 ?
  //   wines.filter(wine => !(filters.indexOf(wine.secondary_category) + 1)).slice(0, 5) :
  //   wines.slice(0, 5)

  let filteredWines = wines

  // Iterate through filters and filter if any are selected
  for(const key in filters) {
    if (filters[key].length > 0) {
      filteredWines = filteredWines.filter(wine => {
        return filters[key].indexOf(wine[key]) > -1
      })
    }
  }

  let mapped = filteredWines.map((wine, i) => {
    return {
      index: i,
      value: wine[sortKey]
    }
  })

  mapped.sort((a, b) => {
    if (b.value > a.value) {
      return 1
    }
    if (a.value > b.value) {
      return -1
    }
    return 0
  })

  const sortedFilteredWines = mapped.map((el) => {
    return filteredWines[el.index];
  });

  const topFiveWines = sortedFilteredWines.slice(0, 5)
  
  return(
    <div
      label="ProductCardsList"
      css={`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {topFiveWines.map(wine => <ProductCard wine={wine} key={wine.id} />)}
    </div>
  )
}

// Static type checking for props
ProductCardsList.propTypes = {
  wines: PropTypes.array.isRequired,
  sortKey: PropTypes.string.isRequired,
  filters: PropTypes.object
}