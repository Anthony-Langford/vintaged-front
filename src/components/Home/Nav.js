import React from 'react'
import PropTypes from 'prop-types'

// Import components
import NavLinks from './NavLinks'

export default function Nav({
  toggleNav,
  navOpen
}) {
  const links = [
    { name: 'Home', link: "/" },
    { name: 'Products', link: "/products" },
  ]

  return(
    <div
      label="NavBar"
      onClick={toggleNav}
      css={`
        display: flex;
        justify-content: space-between;
        z-index: 1001;
        position: absolute;
        top: 0px;
        bottom: 0px;
        left: -250px;
        padding: 32px 0 32px 32px;
        width: 250px;
        transition: transform 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
        will-change: transform;
        overflow-y: auto;
        transform: translateX(${navOpen ? 100 : 0}%);
        background-color: #f5f5f5;
      `}
    >
      <div css={`max-width: 350px;`}>
        <h3>Navigation</h3>
        <nav>
          <NavLinks links={links} navOpen={navOpen} />
        </nav>
      </div>
      <div
        css={`
          position: relative;
          overflow: hidden;
          display: inline-block;
          padding: 0;
          width: 100%;
          height: auto;
        `}
      >
        <img
          alt="vintaged"
          src="/thyrsus.jpg"
          css={`
            position: absolute;
            top: 0px;
            left: 0px;
            transition: opacity 0.5s;
            width: 120%;
            margin-left: -18px;
            object-fit: cover;
            object-position: 50% 50%;
            opacity: 1;
            mix-blend-mode: multiply;
          `}
        />
      </div>
    </div>
  )
}

// Static type checking for props
Nav.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  navOpen: PropTypes.bool.isRequired
}