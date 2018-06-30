import React from 'react'
import PropTypes from 'prop-types'

// Import components
import NavLinks from './NavLinks'

export default function Nav({
  toggleNav,
  openNav
}) {
  return (
    <div
      label="NavBar"
      onClick={toggleNav}
      css={`
        z-index: 2;
        position: absolute;
        top: 0px;
        bottom: 0px;
        transition: transform 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        will-change: transform;
        overflow-y: auto;
        right: 0px;
        transform: translateX(${openNav ? 0 : 100}%);
        background-color: #f5f5f5;
        padding: 32px;
        width: 250px;
      `}
    >
      <h3>Navigation</h3>
      <nav>
        <NavLinks />
      </nav>
    </div>
  )
}

// Static type checking for props
Nav.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  openNav: PropTypes.bool.isRequired
}