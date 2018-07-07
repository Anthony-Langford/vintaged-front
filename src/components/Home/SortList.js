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
  selected,
  onClick
}) {

  return(
    <List>
      {sortList.map(sortItem =>
        <SortItem
          key={sortItem.id}
          onClick={onClick}
          title={sortItem.title}
          value={sortItem.value}
          selected={selected}
        />
      )}
    </List>
  )
}

// Static type checking for props
SortList.propTypes = {
  sortList: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}