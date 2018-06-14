import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'react-emotion'

// Import helpers
import store from '../store'
import { commonActions } from '../actions'

const Card = styled('div')`
  display: flex;
  overflow: scroll;
  padding: 4px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 7px;
  box-shadow: 0px 1px 0 #d10000,
    2px 2px 0 #FFC107,
    3px 4px 0 #019DC9;
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.3);
    border: 1px solid rgba(0,50,0,0.6);
  }
`

const Column = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 4px;
`

const Text = styled('span')`
  font-size: 12px;
`

const Title = styled('h1')`
  font-size: 1.1em;
  font-weight: 500;
`

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wine: null
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
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
        `}>
          <Card>
            <Column>
              <img src={wine.image_thumb_url} height="200px" />
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