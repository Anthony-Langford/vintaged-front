import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Import components
import Header from './Home/Header'
import Wrapper from './Home/Wrapper'
import HomeContent from './Home/HomeContent'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winesFetched: props.common.wines.length,
      openNav: false,
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
    this.setState({
      openNav: !this.state.openNav
    }, () => {console.log('hi', this.state)})
  }

  render() {
    const winesFetched = this.state.winesFetched

    return (
      <Wrapper>
        <Header />
        <HomeContent
          wines={this.props.common.wines}
          winesFetched={winesFetched}
          toggleNav={this.toggleNav}
          openNav={this.state.openNav}
        />
      </Wrapper>
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