import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Card from './Card'

export default function ProductCard({ wine }) {
  return(
    <Card>
      <div css={`display: flex; flex-direction: row; width: 100%;`}>
        <div css={`
             width:600px;
             overflow:hidden;
             margin:0;`}>
          <img src={wine.image_url} css={`
              display:inline-block;
              width:250%;
              margin-top:-20%;
              margin-left:-78%;
              margin-bottom:-20%;`}/>
        </div>
        <ul css={`margin: 0px 0 0 0; padding: 0; list-style: none;`}>
          <li css={`font-weight: bold; margin-top: 10px;`}> {wine.name}</li>
          <li css={`font-style: oblique; margin-top: 2px;`}>{`${wine.origin}`}</li>
          <li css={`margin-top: 2px; font-size: larger`}>{`$${wine.price_in_cents/100}`}</li>
          <li css={`margin-top: 2px;`}>{`#${wine.id}`}</li>
          <br></br>
          <li css={`margin-top: 2px;`}>{`${wine.sold} bottles or ${wine.sold_percent}% of the initial inventory of ${wine.release_units} have been sold since the release date ${wine.released_on} representing ${wine.heat}% sold per day.`}</li>
        </ul>
      </div>


    </Card>
  )
}

// Static type checking for props
ProductCard.propTypes = {
  wine: PropTypes.object.isRequired
}
