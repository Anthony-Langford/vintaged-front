import React from 'react'
import PropTypes from 'prop-types'

// Import components
import Dropdown from './Dropdown'

export default function Sorting({
  title,
  list,
  toggleItem
}) {

  return(
    <div label="Filtering" css={`display: flex; justify-content: start; margin: 0.25rem 0.5rem;`}>
      <div css={`margin: 8px 0;`}>
        <span>Filter by:</span>
      </div>

      <Dropdown
        title={title}
        list={list}
        toggleItem={toggleItem}
      />
    </div>
  )
}

// Static type checking for props
Sorting.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  toggleItem: PropTypes.func.isRequired
}