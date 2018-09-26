import React from 'react'
import PropTypes from 'prop-types'

// Import components
import Map from '../Map'

export default function Content({
  geolocation,
  location
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
      {geolocation && location.nearestStore ?
        <React.Fragment>
          <p css={`text-align: center`}>{`There's a vintage section near you at ${location.nearestStore.name}`}</p>
          <p css={`text-align: center; margin-top: 0;`}>Showing you the best wines available here</p>
          {/* <Map geolocation={geolocation} /> */}
        </React.Fragment>
        :
        <p css={`text-align: center`}>Showing you the best wines in Ontario</p>
      }
    </div>
  )
}

// Static type checking for props
Content.propTypes = {
  geolocation: PropTypes.bool.isRequired,
  location: PropTypes.object
}