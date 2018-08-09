import React from 'react'
import PropTypes from 'prop-types'

// add link to wines (with filter option?)
// add data-driven content
// add top 5 wines for ontario?

export default function HomeContent({
  geolocation
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
        Explore Vintaged and Find Your Wine
      </h1>
      {geolocation ?
        <p css={`text-align: center`}>We found the best wines from your nearest store for you</p> :
        <p css={`text-align: center`}>We found the best wines from across Ontario for you </p>
      }
    </div>
  )
}

// Static type checking for props
HomeContent.propTypes = {
  geolocation: PropTypes.bool.isRequired
}