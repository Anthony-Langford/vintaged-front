import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

// Import components
import Header from './Home/Header'
import ContentWrapper from './Home/ContentWrapper'
import NavWrapper from './Home/NavWrapper'
import LoaderWrapper from './Home/LoaderWrapper'
import Sorting from './Home/Sorting'
import {filterMap} from './Home/Filtering'
import ProductCardsList from './Home/ProductCardsList'
import Footer from './Home/Footer'
import MultiSelect from './Home/MultiSelect'

// Import actions
import {
  uiActions,
  sortActions
} from '../actions'

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = filterMap;

    this.toggleNav = this.toggleNav.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.setSort = this.setSort.bind(this);
  }

  handleFilter(value, type) {
    this.setState({filters: {
      [type]: value
    }});
  }

  toggleNav() {
    this.props.dispatch(uiActions.toggleNav(!this.props.ui.navOpen))
  }

  setSort(sortBy, id) {
    let sortDirection = this.props.sort.sortDirection
    let sortList = this.props.sort.sortList

    if (this.props.sort.sortBy === sortBy) {
      sortDirection = sortDirection === 'ascending' ? 'descending' : 'ascending'
      sortList[id].sortDirection = sortList[id].sortDirection === 'ascending' ? 'descending' : 'ascending'
    }

    this.props.dispatch(sortActions.setSort(sortBy, sortDirection, sortList))
  }

  render() {

    return (
      <React.Fragment>
        <ContentWrapper label="Content">
          <Header label="Header" toggleNav={this.toggleNav}/>

          <NavWrapper toggleNav={this.toggleNav} navOpen={this.props.ui.navOpen}>
            <LoaderWrapper loading={this.props.products.isFetching}>

              <Sorting
                sortList={this.props.sort.sortList}
                onClick={this.setSort}
                sortBy={this.props.sort.sortBy}
                sortDirection={this.props.sort.sortDirection}
              />

              <MultiSelect
                options={this.state.secondary_category}
                type={'secondary_category'}
                handleChange={this.handleFilter}
              />

              <ProductCardsList
                sortBy={this.props.sort.sortBy}
                sortDirection={this.props.sort.sortDirection}
                filters={this.state.filters}
                wines={this.props.products.wines}
                location={this.props.location}
              />
            </LoaderWrapper>
          </NavWrapper>

          <Footer/>
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
Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.object,
  ui: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

// Set default value for prop if not required and not present
Products.defaultProps = {
  products: {}
}

export default connect(mapStateToProps)(Products)