import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

// Import components
import SortList from './SortList'

export default function Sorting({
  sortList,
  onClick,
  sortBy,
  sortDirection
}) {

  return(
    <div label="Sorting" css={`display: flex; justify-content: start; margin: 0.25rem 0.5rem;`}>
      <div css={`display: flex; margin: 8px 0; align-items: center;`}>
        <span>Sort by:</span>
        <SortList
          sortList={sortList}
          onClick={onClick}
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
      </div>
    </div>
  )
}

// Static type checking for props
Sorting.propTypes = {
  sortList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired
}