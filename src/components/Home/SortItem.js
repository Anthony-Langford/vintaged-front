import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

export default function SortItem({
  title,
  value,
  selected,
  onClick
}) {

  const ListItem = styled('li')`
    list-style: none;
    margin: 0 8px;
    width: calc(100% + 20px);
  `

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
      <Button
        href="#"
        aria-controls="content-0"
        onClick={onClick}
        value={value}
      >
        {title}
      </Button>
    </ListItem>
  )
}

// Static type checking for props
SortItem.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}