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
    background-color: #f2f2f2;
    border: 1px solid #bfbfbf;
    box-shadow: inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2, 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #1D2029;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    cursor: pointer;
    font-family: Verdana, sans-serif;
    font-size: 12px;
    font-weight: ${sortBy === value ? 'bold' : 'normal'};
    line-height: 20px;
    padding: 6px 10px;
    transition: all 20ms ease-out;
    outline: none;
    &:hover,
    &:focus {
      background: #f2f2f2;
      border-color: #8c8c8c;
      box-shadow: inset 0 1px 0 white, inset 0 -1px 0 #d9d9d9, inset 0 0 0 1px #f2f2f2;
    }
    &:active {
      background: inset 0 2px 3px rgba(0, 0, 0, 0.2);
      box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.2);
    }
  `

  return(
    <ListItem>
      <Button
        href="#"
        role={'button'}
        tabindex={0}
        onClick={() => onClick(value, id)}
        value={value}
      >
        <span css={'display: flex;'}>
          {title}
          {sortDirection === 'ascending' ?
            <Icon icon="arrow" height="12px" width="12px" name="arrow-down" margin='auto 6px' /> :
            <Icon icon="arrow" height="12px" width="12px" name="arrow-up" margin='auto 6px' rotate={180} />
          }
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