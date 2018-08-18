import React from 'react'
import PropTypes from 'prop-types'

export default function HomeContent({
  geolocation,
  stores
}) {
  return(
    <div
      css={`
        display: flex;
        flex-direction: column;
        margin: 0 1rem;
        justify-content: center;
      `}
    >
      <h1 css={`font-weight: 300; text-align: center;`}>
        Explore Vintaged and Find Good Wine
      </h1>
      {geolocation && stores.nearest ?
        <React.Fragment>
          <p css={`text-align: center`}>We found a vintage section near you at {stores.nearest.name}</p>
          <p css={`text-align: center; margin-top: 0;`}>Showing you the best wines available here</p>
        </React.Fragment> :
        <p css={`text-align: center`}>Showing you the best wines in Ontario</p>
      }
    </div>
  )
}

// Static type checking for props
HomeContent.propTypes = {
  geolocation: PropTypes.bool.isRequired,
  stores: PropTypes.object
}