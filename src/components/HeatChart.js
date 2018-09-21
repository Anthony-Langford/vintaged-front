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
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

// Import actions
import { uiActions } from '../actions'

class HeatChart extends React.Component {
  constructor(props) {
    super(props)
    props.common.wines.map((wine) => {
      return wine.heat_history.slice(
        (wine.heat_history.length - wine.days_since_release),
        (wine.heat_history.length - 1)
      )});
    this.state = {
      data: props.common.wines.map( wine => {
        return wine.heat_history.slice(
          (wine.heat_history.length - wine.days_since_release),
          (wine.heat_history.length - 1)
        )})
    }
    console.log(this.state.data)
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
                <LineChart
                  width={600}
                  height={300}
                  data={this.props.common.wines[3].inventory_history.slice(
                    (this.props.common.wines[3].inventory_history.length - (this.props.common.wines[3].days_since_release -5)),
                    (this.props.common.wines[3].inventory_history.length - 1)
                  )}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                  <XAxis dataKey="updatedAt" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="diff" stroke="#82ca9d" activeDot={{r: 8}} />
                  <Line yAxisId="right" type="monotone" dataKey="units" stroke="#8884d8" activeDot={{r: 8}} />
                </LineChart>

                <LineChart
                  width={600}
                  height={300}
                  data={this.props.common.wines[3].heat_history.slice(
                    (this.props.common.wines[3].heat_history.length - this.props.common.wines[3].days_since_release),
                    (this.props.common.wines[3].heat_history.length - 1)
                  )}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                  <XAxis dataKey="updatedAt" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="heat" stroke="#82ca9d" activeDot={{r: 8}} />
                </LineChart>
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
HeatChart.propTypes = {
  dispatch: PropTypes.func.isRequired,
  common: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired
}

// Set default value for prop if not required and not present
HeatChart.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(HeatChart)
