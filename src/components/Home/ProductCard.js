import React from 'react'
import PropTypes from 'prop-types'

// Import components
import Card from './Card'
import Row from './Row'
import Column from './Column'
import Text from './Text'
import Title from './Title'
import Heart from './Heart'

function ProductCard(props) {
  const wine = props.wine

  return (
    <Card>
      <Column>
        <Heart />

        <img src={wine.image_thumb_url} height="200px" width="150px" />
        
        <Row>
          <Column>
            <Text>
              Price: ${wine.price_in_cents/100}
            </Text>

            <Text>
              Volume: {wine.volume_in_milliliters}mL
            </Text>

            <Text>
              ABV: {wine.alcohol_content/100}%
            </Text>

            <Text>
              Product #: {wine.product_no}
            </Text>
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

            <Text>
              Style: {wine.style}
            </Text>

            <Text>
              Producer: {wine.producer_name}
            </Text>
          </Column>
        </Row>
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
  wine: PropTypes.object.isRequired,
}

export default ProductCard