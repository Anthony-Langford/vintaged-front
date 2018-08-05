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

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];



// Import actions
import { uiActions } from '../actions'

class HeatChart extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props.common.wines);
    // props.common.wines.map((item) => {
    //   console.log(item.name);
    // });
    // console.log(this.props.common.wines[0].inventory_history.slice((this.props.common.wines[0].inventory_history.length - this.props.common.wines[0].days_since_release)))
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
                <LineChart
                  width={600}
                  height={300}
                  data={this.props.common.wines[3].inventory_history.slice(
                    (this.props.common.wines[3].inventory_history.length - (this.props.common.wines[3].days_since_release - 1)),
                    (this.props.common.wines[3].inventory_history.length - 1)
                  )}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                  <XAxis dataKey="date" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="diff" stroke="#82ca9d" activeDot={{r: 8}} />
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
                  <XAxis dataKey="date" />
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
  common: PropTypes.object,
  ui: PropTypes.object.isRequired
}

// Set default value for prop if not required and not present
HeatChart.defaultProps = {
  common: {}
}

export default connect(mapStateToProps)(HeatChart)
