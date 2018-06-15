import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'react-emotion'

// Import components
import Card from './Home/Card'
import Row from './Home/Row'
import Column from './Home/Column'
import Text from './Home/Text'
import Title from './Home/Title'

// Import helpers
import store from '../store'
import { commonActions } from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wine: null
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.common.wines !== prevProps.common.wines) {
      const wineId = this.props.common.wines[0]._id

      store.dispatch(commonActions.fetchWine(wineId))
        .then(() => {
          this.setState({
            wine: this.props.common[wineId]
          }, () => {
          })
        })
    }
  }

  render() {
    const wine = this.state.wine

    return (
      !wine ? (
        <div>
          Loading...
        </div>
      ) : (
        <div css={`
          display: flex;
          flex-flow: row wrap;
          height: 100vh;
          padding: 1rem;
          overflow: scroll;
        `}>
          <Card>
            <Column>
              <div
                css={`
                  height: 25px;
                `}
              >
                <input
                  id="toggle-heart"
                  type="checkbox"
                  css={`
                    position: absolute;
                    left: -100vw;
                    @keyframes heart { 0%, 17.5% { font-size: 0; } }
                    &:checked + label {
                      color: #e2264d;
                      will-change: font-size;
                      animation: heart 1s cubic-bezier(.17, .89, .32, 1.49);
                    }
                    cursor: pointer;
                  `}
                />
                <label
                  htmlFor="toggle-heart"
                  css={`
                    color: #aab8c2;
                    width: min-content;
                    font-size: 25px;
                  `}
                >
                  ❤
                </label>
              </div>
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

              <Text css={`
                overflow: scroll;
              `}>
                Description: {wine.tasting_note}
              </Text>
            </Column>
          </Card>
        </div>
      )
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  }
}

// Static type checking for props
Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  common: PropTypes.object
}

// Set default value for prop if not required and not present
Home.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(Home)