import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import store from '../store'

// Import components
import Header from './Home/Header'
import Wrapper from './Home/Wrapper'
import NavWrapper from './Home/NavWrapper'
import ProductCardsList from './Home/ProductCardsList'

// Import actions
import { uiActions } from '../actions'
import LoaderWrapper from './Home/LoaderWrapper'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winesFetched: false
    }

    this.toggleNav = this.toggleNav.bind(this);
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

  toggleNav() {
    store.dispatch(uiActions.toggleNav(!this.props.ui.navState))
  }

  render() {
    return (
      <Wrapper>
        <Header />
        {/* <NavWrapper toggleNav={this.toggleNav} navState={this.props.ui.navState} >
          <LoaderWrapper winesFetched={this.state.winesFetched} >
            <ProductCardsList wines={this.props.common.wines} />
          </LoaderWrapper>
        </NavWrapper> */}
        <LoaderWrapper winesFetched={this.state.winesFetched} >
          <ProductCardsList wines={this.props.common.wines} />
        </LoaderWrapper>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

// Static type checking for props
Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  common: PropTypes.object,
  ui: PropTypes.object.isRequired,
}

// Set default value for prop if not required and not present
Home.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(Home)