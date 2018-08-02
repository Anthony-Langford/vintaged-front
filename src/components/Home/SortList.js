import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

// Import components
import SortItem from './SortItem'

const List = styled('ul')`
  display: flex;
  margin: 0;
  padding: 0;
`

export default function SortList({
  sortList,
  sortBy,
  onClick,
  sortDirection
}) {
  return(
    <List>
      {sortList.map(sortItem =>
        <SortItem
          key={sortItem.id}
          id={sortItem.id}
          onClick={onClick}
          title={sortItem.title}
          value={sortItem.value}
          sortBy={sortBy}
          sortDirection={sortDirection}
        />
      )}
    </List>
  )
}

// Static type checking for props
SortList.propTypes = {
  sortList: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired
}