import React from 'react'
import PropTypes from 'prop-types'

// Import components
import NavLinks from './NavLinks'

export default function Nav({
  toggleNav,
  navOpen
}) {
  return(
    <div
      label="NavBar"
      onClick={toggleNav}
      css={`
        z-index: 1001;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: -250px;
        padding: 32px;
        width: 250px;
        transition: transform 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        will-change: transform;
        overflow-y: auto;
        transform: translateX(${navOpen ? 100 : 0}%);
        background-color: #f5f5f5;
      `}
    >
      <h3>Navigation</h3>
      <nav>
        <NavLinks navOpen={navOpen} />
      </nav>
    </div>
  )
}

// Static type checking for props
Nav.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired
}