import React from 'react'
import PropTypes from 'prop-types'

// Wine glass filling up loader
// https://codepen.io/wolfvanveen/pen/zopKqN

export default function LoaderWrapper({
  winesFetched,
  children
}) {
  return(
    winesFetched ? children : <div>Loading...</div>
  )
}

LoaderWrapper.propTypes = {
  winesFetched: PropTypes.bool,
  children: PropTypes.node
}