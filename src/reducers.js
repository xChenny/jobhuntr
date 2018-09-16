import { combineReducers } from 'redux'

import {reducer as toastrReducer} from 'react-redux-toastr'
import appState from './views/apps/reducer'
import dashState from './views/dash/reducer'

// A method that combines all of the reducers into one reducer so that the app can scale

export default combineReducers({
  appState,
  dashState,
  toastr: toastrReducer
})