import React from 'react'
import PropTypes from 'prop-types'

// Import components
import Card from './Card'
// import Row from './Row'
import Column from './Column'
import Text from './Text'
import Title from './Title'

export default function ProductCard({ wine }) {
  return (
    <Card>
      <Column>
        <img src={wine.image_thumb_url} height="200px" width="150px" />
        
        <Column>
          <Text>
            Price: ${wine.price_in_cents/100}
          </Text>

          {/* <Text>
            Volume: {wine.volume_in_milliliters}mL
          </Text>

          <Text>
            ABV: {wine.alcohol_content/100}%
          </Text>

          <Text>
            Product #: {wine.product_no}
          </Text> */}
        </Column>

        <Column>
          <Text>
            Origin: {wine.origin}
          </Text>
          <Text>
            Category: {wine.secondary_category}
          </Text>
          <Text>
            Type: {wine.varietal}
          </Text>
          {wine.store_LAPI ? 
            <Text>
              Store: {wine.store_LAPI.store_id}
            </Text> : ''
          }
          <Text>
            Released On: {wine.released_on}
          </Text>
          <Text>
            Heat: {wine.heat}{wine.heat > 5 && '🔥'}
          </Text>

          {/* <Text>
            Style: {wine.style}
          </Text>

          <Text>
            Producer: {wine.producer_name}
          </Text> */}
        </Column>
      </Column>

      <Column>
        <Title>{wine.name}</Title>
        <Text>
          Description: {wine.tasting_note}
        </Text>
      </Column>
    </Card>
  )
}

// Static type checking for props
ProductCard.propTypes = {
  wine: PropTypes.object.isRequired
}