import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import store from '../store'

// Import components
import Header from './Home/Header'
import ContentWrapper from './Home/ContentWrapper'
import NavWrapper from './Home/NavWrapper'
import LoaderWrapper from './Home/LoaderWrapper'
import Footer from './Home/Footer'

// Import actions
import { uiActions } from '../actions'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    store.dispatch(uiActions.toggleNav(!this.props.ui.navOpen))
  }

  render() {
    return (
      <React.Fragment>
        <ContentWrapper label="Content">
          <Header label="Header" toggleNav={this.toggleNav} />

          <NavWrapper toggleNav={this.toggleNav} navOpen={this.props.ui.navOpen}>
            <LoaderWrapper loading={this.props.common.isFetching}>
              <div
                css={`
                  display: flex;
                  flex-direction: column;
                  margin: 0 1rem;
                `}
              >
                <h1 css={`font-weight: 300;`}>Explore Vintaged and Find Your Wine</h1>
              </div>
            </LoaderWrapper>
          </NavWrapper>

          <Footer />
        </ContentWrapper>
      </React.Fragment>
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
  ui: PropTypes.object.isRequired
}

// Set default value for prop if not required and not present
Home.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(Home)