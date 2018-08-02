import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

// Import components
import Icon from './Icon'

const ListItem = styled('li')`
  list-style: none;
  margin: 0 8px;
  width: calc(100% + 20px);
`

export default function SortItem({
  id,
  title,
  value,
  sortBy,
  onClick,
  sortDirection
}) {

  const Button = styled('button')`
    padding: 0.25rem;
    font-weight: ${sortBy === value ? 'bold' : 'normal'};
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
      <Button
        href="#"
        aria-controls="content-0"
        onClick={() => onClick(value, id)}
        value={!value}
        sortDirection={sortDirection}
      >
        <span css={'display: flex;'}>
          {title}{sortBy === value && sortDirection === 'ascending' ?
            (<Icon icon="arrow-up" height="12px" width="12px" name="arrow-down" margin='auto 6px' />) :
            <Icon icon="arrow-up" height="12px" width="12px" name="arrow-up" margin='auto 6px' rotate={true} />}
        </span>
      </Button>
    </ListItem>
  )
}

// Static type checking for props
SortItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  sortDirection: PropTypes.string.isRequired,
}