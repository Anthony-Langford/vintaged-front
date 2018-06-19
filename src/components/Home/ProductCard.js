import React from 'react'

// Import components
import Card from './Card'
import Row from './Row'
import Column from './Column'
import Text from './Text'
import Title from './Title'
import Heart from './Heart'

function ProductCard() {
  return (
    <Card>
      <Column>
        <Heart />

        {/* <img src={wine.image_thumb_url} height="200px" width="150px" /> */}
        <img src="https://dx5vpyka4lqst.cloudfront.net/products/298182/images/thumb.png" height="200px" width="150px" />
        
        <Row>
          <Column>
            <Text>
              {/* Price: ${wine.price_in_cents/100} */}
              Price: $40.95
            </Text>

            <Text>
              {/* Volume: {wine.volume_in_milliliters}mL */}
              Volume: 750mL
            </Text>

            <Text>
              {/* ABV: {wine.alcohol_content/100}% */}
              ABV: 9%
            </Text>

            <Text>
              {/* Product #: {wine.product_no} */}
              Product #: 298182
            </Text>
          </Column>

          <Column>
            <Text>
              {/* Origin: {wine.origin} */}
              Origin: Germany, Mosel
            </Text>

            <Text>
              {/* Category: {wine.secondary_category} */}
              Category: White Wine
            </Text>

            <Text>
              {/* Type: {wine.varietal} */}
              Type: Riesline
            </Text>

            <Text>
              {/* Style: {wine.style} */}
              Style: Aromatic & Flavourful
            </Text>

            <Text>
              {/* Producer: {wine.producer_name} */}
              Producer: Dr. H. Thanisch-Erben Müller Burggraef
            </Text>
          </Column>
        </Row>
      </Column>

      <Column>
        {/* <Title>{wine.name}</Title> */}
        <Title>Brauneberger Juffer-Sonnenuhr Riesling Spätlese 2014</Title>

        <Text css={`
          overflow: scroll;
        `}>
          {/* Description: {wine.tasting_note} */}
          Description: The 2015 Brauneberger Juffer-Sonnenuhr Riesling Spätlese is very clear, ripe and generous on the nose, provided with perfectly ripe fruit and a very delicate flinty slate aroma. Lush, finessed and elegant but also straight, piquant and fresh on the palate, this is a very elegant and perfectly balanced Spätlese with a stimulatingly salty finish. Very sensual and seductive. Drink Date: 2017-2040. Score - 93. (Stephan Reinhardt, robertparker.com, April 28, 2017)
        </Text>
      </Column>
    </Card>
  )
}

export default ProductCard