import React from 'react'
import PropTypes from 'prop-types'

export default function SortItem({
  title,
  selected,
  value,
  onClick
}) {
  return(
    selected ?
      <button onClick={onClick} value={value} css={`margin: 0 8px; padding: 0.25rem; font-weight: bold; &:hover {cursor: pointer}`}>{title}</button> :
      <button onClick={onClick} value={value} css={`margin: 0 8px; padding: 0.25rem; &:hover {cursor: pointer}`}>{title}</button>
  )
}

// Static type checking for props
SortItem.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}