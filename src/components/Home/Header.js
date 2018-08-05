import React from 'react'
import PropTypes from 'prop-types'

// Import components
import Logo from './Logo'
import NavButton from './NavButton'

export default function Header ({
  toggleNav
}) {
  return(
    <div
      label="Header"
      css={`
        background: #1D2029;
        z-index: 3;
        width: 100%;
        top: 0;
        left: 0;
      `}
    >
      <div
        css={`
          display: flex;
          flex: 1;
          overflow: auto;
          justify-content: space-between;
          padding: 16px;
        `}
      >
        <div
          css={`
            display: inline;
            flex: 1;
            align-items: center;
            opacity: 1;
            transition: opacity 200ms ease;
            width: min-content;
          `}
        >
          <nav css={`
            display: flex;
          `}
          >
            <NavButton onClick={toggleNav} />
          </nav>
        </div>
        <h1
          css={`
            margin: 0 0 0 8px;
            width: 100%;
            font-family: Lobster;
            font-size: 32px;
            font-weight: 300;
            color: #f5f5f5;
          `}
        >
          Vintaged
        </h1>
        <Logo />
      </div>
    </div>
  )
}

// Static type checking for props
Header.propTypes = {
  toggleNav: PropTypes.func.isRequired
}
