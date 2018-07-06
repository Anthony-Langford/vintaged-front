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
        secondary_category: []
      },
      secondary_category: [
        {
          id: 0,
          title: 'Red Wine',
          selected: false,
          key: 'secondary_category'
        },
        {
          id: 1,
          title: 'White Wine',
          selected: false,
          key: 'secondary_category'
        },
        {
          id: 2,
          title: 'Rosé Wine',
          selected: false,
          key: 'secondary_category'
        }
      ]
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }
  
  // Update state upon receiving new props (from redux)
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

  // Update the state upon changing selected filters
  toggleFilter(id, key) {
    // Find the category
    let secondary_category = this.state[key]

    // Toggle the selected boolean
    secondary_category[id].selected = !secondary_category[id].selected

    // Find the corresponding filter array
    let updatedFilters = this.state.filters[key]

    // Update the filter array
    if (updatedFilters.indexOf(secondary_category[id].title) === -1) {
      updatedFilters.push(secondary_category[id].title)
    } else {
      updatedFilters.splice(updatedFilters.indexOf(secondary_category[id].title), 1)
    }

    // Update state
    this.setState({
      [key]: secondary_category,
      filters: {
        [key]: updatedFilters
      }
    })
  }
  
  // Sets the dropdown title depending on selected items
  setTitle(category) {
    const itemsSelected = this.state[category].filter(item => (item.selected === true)).length

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
        {/* <NavWrapper toggleNav={this.toggleNav} navState={this.props.ui.navState}>
          <LoaderWrapper winesFetched={this.state.winesFetched}>
            <ProductCardsList wines={this.props.common.wines} />
          </LoaderWrapper>
        </NavWrapper> */}
        <LoaderWrapper winesFetched={this.state.winesFetched}>
          <div css={`display: flex; justify-content: start; margin: 0.5rem;`}>
            <div css={`margin: 8px 0;`}>
              <span>Filter:</span>
            </div>
            <Dropdown title={this.setTitle('secondary_category')} list={this.state.secondary_category} toggleItem={this.toggleFilter} />
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