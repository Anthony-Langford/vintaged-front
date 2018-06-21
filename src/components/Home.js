import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Import components
import Header from './Home/Header'
import Wrapper from './Home/Wrapper'
import ProductCardsList from './Home/ProductCardsList'

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
    const wines = this.props.common.wines.slice(0, 5)
    const winesFetched = this.state.winesFetched

    return (
      !winesFetched ? (
        <div>Loading...</div>
      ) : (
        <div
          css={`
            display: flex;
            flex-direction: column;
            flex: 1;
          `}
        >
          <Header />
          <Wrapper>
            <ProductCardsList wines={wines} />
          </Wrapper>
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