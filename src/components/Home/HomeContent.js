import React from 'react'
import PropTypes from 'prop-types'

// Import components
import ProductCardsList from './ProductCardsList'
import NavigationLogo from './NavigationLogo'

function HomeContent(props) {
  const wines = props.wines
  const winesFetched = props.winesFetched
  
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
        </div>
        <NavigationLogo />
      </div>
    </div>
  )
}

// Static type checking for props
HomeContent.propTypes = {
  wines: PropTypes.array.isRequired,
  winesFetched: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired
}

export default HomeContent