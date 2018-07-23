import React from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'

import Card from './Card'

export default function ProductCard({ wine }) {
  return(
    <Card>
      <div css={`display: flex; width: 100%;`}>
        <div css={`
             width:40%;
             overflow:hidden;
             margin:0;`}>
          <img src={wine.image_url} css={`
              display:inline-block;
              width:250%;
              margin-top:-20%;
              margin-left:-78%;
              margin-bottom:-20%;`}/>
        </div>
        <div css={`width: 60%`}>
          <ul css={`margin: 10px 0 0 0; padding: 0; list-style: none;`}>
            <li css={`font-weight: bold; margin-top: 2px; font-size: larger;`}> {wine.name}</li>
            <li css={`font-style: oblique; margin-top: 7px;`}>{`${wine.origin}`}</li>
            <li css={`margin-top: 2px;`}>{`#${wine.id}`}</li>
            <li css={`margin-top: 2px; font-size: larger; margin-bottom: 7px; margin-bottom: 7px;`}>{`$${wine.price_in_cents/100}`}</li>
          </ul>
          <table css={`width: 100%;
              border: 1px solid #ddd;
              padding: 3px;`}>
            <tr css={`background-color: #f2f2f2;`}>
              <td>ABV</td>
              <td>{`${wine.alcohol_content/100}%`}</td>
            </tr>
            <tr>
              <td>Sugar GPL</td>
              <td>{wine.sugar_in_grams_per_liter}</td>
            </tr>
            <tr css={`background-color: #f2f2f2;`}>
              <td>Release date</td>
              <td>{wine.released_on}</td>
            </tr>
            <tr>
              <td>Initial inventory</td>
              <td>~{wine.release_units} bottles</td>
            </tr>
            <tr css={`background-color: #f2f2f2;`}>
              <td>Sold</td>
              <td>{wine.sold} bottles</td>
            </tr>
            <tr>
              <td>Percent Sold</td>
              <td>{wine.sold_percent}%</td>
            </tr>
            <tr css={`font-weight: bold; margin-top: 45px; background-color: #f2f2f2;`}>
              <td>Heat</td>
              <td>{wine.heat}</td>
            </tr>
          </table>
        </div>
      </div>


    </Card>
  )
}

// Static type checking for props
ProductCard.propTypes = {
  wine: PropTypes.object.isRequired
}
