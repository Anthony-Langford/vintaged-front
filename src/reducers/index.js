import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import common from './common';

const rootReducer = combineReducers({
  common,
});

export default rootReducer;
