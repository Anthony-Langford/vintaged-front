import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Card from './Card'

export default function ProductCard({ wine }) {
  return(
    <Card>
      <div css={`display: flex; justify-content: space-between; margin: 0; font-weight: bold;`}>
        <div>{wine.name}</div>
        <div>{wine.heat > 5 ? '🔥' : ''}</div>
      </div>

      <div css={`display: flex; flex-direction: row; width: 100%;`}>
        <div css={`width: 150px;`}>
          <img src={wine.image_thumb_url} css={`width: 100%; height: 100%; object-fit: cover;`} />
        </div>

        <ul css={`margin: 10px 0 0 0; padding: 0; list-style: none;`}>
          <li>{`Price: $${wine.price_in_cents/100}`}</li>
          <li>{`Origin: ${wine.origin}`}</li>
          <li>{`Category: ${wine.secondary_category}`}</li>
          <li>{`Type: ${wine.varietal}`}</li>
          <li>{`Released On: ${wine.released_on}`}</li>
          <li>{`Heat: ${wine.heat}`}</li>
        </ul>
      </div>

      <div>
        <p>Description: {wine.tasting_note}</p>
      </div>
    </Card>
  )
}

// Static type checking for props
ProductCard.propTypes = {
  wine: PropTypes.object.isRequired
}