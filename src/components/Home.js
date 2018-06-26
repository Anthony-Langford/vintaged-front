import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Import components
import Header from './Home/Header'
import Wrapper from './Home/Wrapper'
import ProductCardsList from './Home/ProductCardsList'

// Import helper functions
import getCurrentLocation from '../helpers/getCurrentLocation'

getCurrentLocation()

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winesFetched: props.common.wines.length
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.common.wines !== prevProps.common.wines) {
      if (this.props.common.wines.length) {
        this.setState({
          winesFetched: true
        })
      }
    }
  }

  render() {
    const wines = this.props.common.wines
    const winesFetched = this.state.winesFetched

    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          {!winesFetched ? (
            <div>Loading...</div>
          ) : (
            <ProductCardsList wines={wines} />
          )}
        </Wrapper>
        <button
          css={`
            position: fixed;
            bottom: 0px;
            right: 0px;
            background-color: #AD1457;
            border-radius: 50%;
            padding: 16px;
            margin: 32px;
            animation: animation-1m49nxd 0.25s ease-in;
            transition: background-color 150ms ease-in-out;
            border-width: 0px;
            border-style: initial;
            border-color: initial;
            border-image: initial;
          `}
        >
          <svg
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
            height="32"
            width="32"
            viewBox="0 0 40 40"
            style={{"verticalAlign": "middle", "color": "white"}}
          >
            <title>Navigation Logo</title>
            <g>
              <path d="m5 10h30v3.4h-30v-3.4z m0 11.6v-3.2h30v3.2h-30z m0 8.4v-3.4h30v3.4h-30z">
              </path>
            </g>
          </svg>
        </button>
      </React.Fragment>
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