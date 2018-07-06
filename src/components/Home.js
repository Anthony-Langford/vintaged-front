import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import store from '../store'

// Import components
import Header from './Home/Header'
import Wrapper from './Home/Wrapper'
import NavWrapper from './Home/NavWrapper'
import Dropdown from './Home/Dropdown'
import ProductCardsList from './Home/ProductCardsList'

// Import actions
import { uiActions } from '../actions'
import LoaderWrapper from './Home/LoaderWrapper'

// Import locale
import locale from '../locale/Home'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      winesFetched: false,
      filters: {
        category: [
          {
            id: 0,
            title: 'Red Wine',
            selected: false,
            key: 'category'
          },
          {
            id: 1,
            title: 'White Wine',
            selected: false,
            key: 'category'
          },
          {
            id: 2,
            title: 'Rosé Wine',
            selected: false,
            key: 'category'
          }
        ]  
      }
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
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

  toggleFilter(id, key) {
    let filterKey = this.state.filters[key]
    filterKey[id].selected = !filterKey[id].selected
    this.setState({
      [key]: filterKey
    })
  }

  setTitle(category) {
    const itemsSelected = this.state.filters[category].filter(item => (item.selected === true)).length

    if (itemsSelected === 0) {
      return locale.category[0]
    }
    else if (itemsSelected === 1) {
      return `${itemsSelected} ${locale.category[1]}`
    }
    else if (itemsSelected > 1) {
      return `${itemsSelected} ${locale.category[2]}`
    }
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
        <LoaderWrapper winesFetched={this.state.winesFetched}>
          <div css={`display: flex; justify-content: start; margin: 0.5rem;`}>
            <div css={`margin: 8px 0;`}>
              <span>Filter:</span>
            </div>
            <Dropdown title={this.setTitle('category')} list={this.state.filters.category} toggleItem={this.toggleFilter} />
          </div>
          <ProductCardsList filters={this.state.filters} wines={this.props.common.wines} />
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