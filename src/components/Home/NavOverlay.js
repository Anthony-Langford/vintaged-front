import React from 'react'
import PropTypes from 'prop-types'

export default function NavOverlay({
  toggleNav,
  openNav
}) {
  return (
    <div
      label="NavOverlay"
      onClick={toggleNav}
      css={`
        z-index: 1;
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        opacity: ${openNav ? 1 : 0};
        visibility: ${openNav ? 'visible' : 'hidden'};
        transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
        background-color: rgba(0, 0, 0, 0.3);
      `}
    />
  )
}

NavOverlay.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  openNav: PropTypes.bool.isRequired
}