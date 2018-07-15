import React from 'react'
import PropTypes from 'prop-types'
import store from '../../store'
import { uiActions } from '../../actions'

// Import components
import ProductCard from './ProductCard'

export default function ProductCardsList({
  wines,
  sortBy,
  sortDirection,
  filters,
  expandedCards
}) {
  const updateExpandedCards = expandedCards => {
    store.dispatch(uiActions.updateExpandedCards(expandedCards))
  }

  // Filter by store-specific inventory data if possible
  const filteredWines = wines[0].store_LAPI ?
    wines.filter(wine => wine.store_LAPI[0].quantity > 0).slice(0, 5) :
    wines.slice(0, 5)

  // Iterate through filters and filter if any are selected
  for(const key in filters) {
    if (filters[key].length > 0) {
      filteredWines.filter(wine => {
        return filters[key].indexOf(wine[key]) > -1
      })
    }
  }

  filteredWines.slice(0, 5)

  // Sort wines by selected sorting method
  const mappedWines = filteredWines.map((wine, i) => {
    return {
      index: i,
      value: wine[sortBy]
    }
  })

  if (sortDirection === 'ascending') {
    mappedWines.sort((a, b) => {
      if (a.value > b.value) {
        return 1
      }
      if (b.value > a.value) {
        return -1
      }
      return 0
    })
  } else {
    mappedWines.sort((a, b) => {
      if (a.value > b.value) {
        return -1
      }
      if (b.value > a.value) {
        return 1
      }
      return 0
    })
  }

  const topFiveWines = mappedWines.map(wine => (
    filteredWines[wine.index]
  ))

  const expandedCardsList = []
  
  topFiveWines.map(wine => {
    expandedCardsList.push({
      key: wine.id,
      expanded: false
    })
  })

  console.log('expandedCardsList', expandedCardsList)

  // updateExpandedCards(expandedCardsList)
  
  return(
    <div
      label="ProductCardsList"
      css={`
        display: flex;
        flex-flow: row wrap;
      `}
    >
      {topFiveWines.map(wine =>
        <ProductCard
          wine={wine}
          key={wine.id}
          expandedCards={expandedCards}
        />
      )}
    </div>
  )
}

// Static type checking for props
ProductCardsList.propTypes = {
  wines: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  filters: PropTypes.object,
  expandedCards: PropTypes.array
}