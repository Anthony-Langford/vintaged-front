import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

const ListItem = styled('li')`
  list-style: none;
  margin: 0 8px;
  width: calc(100% + 20px);
`

export default function SortItem({
  id,
  title,
  value,
  selected,
  onClick,
  sortDirection
}) {

  const Button = styled('button')`
    padding: 0.25rem;
    font-weight: ${selected === value ? 'bold' : 'normal'};
    border: none;
    background-color: White;  
    border-radius: 5px;
    &:focus,
    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  `

  return(
    <ListItem>
      <span>
        <Button
          href="#"
          aria-controls="content-0"
          onClick={() => onClick(value, id)}
          value={!value}
          sortDirection={sortDirection}
        >
          {title}{sortDirection === 'ascending' ? '⬇' : '⬆'}
        </Button>
      </span>
    </ListItem>
  )
}

// Static type checking for props
SortItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
}