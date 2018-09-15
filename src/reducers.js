import { combineReducers } from 'redux'

import appState from './views/apps/reducer'

// A method that combines all of the reducers into one reducer so that the app can scale

export default combineReducers({
  appState
})