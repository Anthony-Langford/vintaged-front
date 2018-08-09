import React from 'react'
import PropTypes from 'prop-types'

// Import components
import ProductCard from './ProductCard'

export default function ProductCardsList({
  wines,
  sortBy,
  sortDirection,
  filters
}) {
  // Filter by store-specific inventory data if possible
  let filteredWines = wines[0].store_LAPI ?
    wines.filter(wine => wine.store_LAPI[0].quantity > 0).slice(0, 5) :
    wines.slice(0, 5)

  // Iterate through filters and filter if any are selected
  for(const key in filters) {
    if (filters[key].length > 0) {
      filteredWines = filteredWines.filter(wine => {
        return filters[key].indexOf(wine[key]) > -1
      })
    }
  }

  filteredWines = filteredWines.slice(0, 5)

  // Sort wines by selected sorting method
  let mapped = filteredWines.map((wine, i) => {
    return {
      index: i,
      value: wine[sortBy]
    }
  })

  if (sortDirection === 'ascending') {
    mapped.sort((a, b) => {
      if (a.value > b.value) {
        return 1
      }
      if (b.value > a.value) {
        return -1
      }
      return 0
    })
  } else {
    mapped.sort((a, b) => {
      if (a.value > b.value) {
        return -1
      }
      if (b.value > a.value) {
        return 1
      }
      return 0
    })
  }

  const topFiveWines = mapped.map(el => (
    filteredWines[el.index]
  ))

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
  sortBy: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  filters: PropTypes.object
}
