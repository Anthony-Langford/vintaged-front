import React from 'react'
import PropTypes from 'prop-types'

// Wine glass filling up loader
// https://codepen.io/wolfvanveen/pen/zopKqN

export default function LoaderWrapper({
  loading,
  children
}) {
  return(
    loading ? loading : children
  )
}

LoaderWrapper.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.node
}
