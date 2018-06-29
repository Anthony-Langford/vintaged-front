import React from 'react'
import PropTypes from 'prop-types'

// Import components
import ProductCardsList from './ProductCardsList'
import Nav from './Nav'
import NavLogo from './NavLogo'
import NavOverlay from './NavOverlay'

export default function HomeContent({
  wines,
  winesFetched,
  openNav,
  toggleNav
}) {
  return (
    <div css={`
      flex: 1;
    `}>
      <div>
        <div css={`
          position: absolute;
          top: 68px;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: scroll;
        `}>
          <div css={`
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow-y: scroll;
          `}>
            {!winesFetched ? (
              <div>Loading...</div>
            ) : (
              <ProductCardsList wines={wines} />
            )}
          </div>

          <Nav toggleNav={toggleNav} openNav={openNav} />
        </div>
        
        <NavOverlay toggleNav={toggleNav} openNav={openNav} />

        <NavLogo onClick={toggleNav} />
      </div>
    </div>
  )
}

// Static type checking for props
HomeContent.propTypes = {
  wines: PropTypes.array.isRequired,
  winesFetched: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  openNav: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
}