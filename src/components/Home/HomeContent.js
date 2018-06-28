import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "@reach/router";

// Import components
import ProductCardsList from './ProductCardsList'
import NavigationLogo from './NavigationLogo'

function HomeContent(props) {
  const wines = props.wines
  const winesFetched = props.winesFetched
  const openNav = props.openNav
  const toggleNav = props.toggleNav
  
  return(
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
          <div onClick={toggleNav} css={`
            z-index: 2;
            position: absolute;
            top: 0px;
            bottom: 0px;
            transition: -webkit-transform 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86);
            will-change: transform;
            overflow-y: auto;
            right: 0px;
            transform: translateX(${openNav ? 0 : 100}%);
            background-color: #f5f5f5;
            padding: 32px;
            width: 250px;
          `}>
            <h3>Navigation</h3>
            <nav>
              <Link
                to="/#"
                css={`
                  display: block;
                  -webkit-text-decoration: none;
                  text-decoration: none;
                  margin: 16px;
                  font-size: 16px;
                  color: inherit;
                `}
              >
                Home
              </Link>
              <Link
                to="/test"
                css={`
                  display: block;
                  -webkit-text-decoration: none;
                  text-decoration: none;
                  margin: 16px;
                  font-size: 16px;
                  color: inherit;
                `}
              >
                Test
              </Link>
            </nav>
          </div>
        </div>
        <div onClick={toggleNav} css={`
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
          `}>
        </div>
        <NavigationLogo onClick={toggleNav} />
      </div>
    </div>
  )
}

// Static type checking for props
HomeContent.propTypes = {
  wines: PropTypes.array.isRequired,
  winesFetched: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
  openNav: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired
}

export default HomeContent