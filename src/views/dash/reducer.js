const dashState = (state = {opps: []}, action) => {
  switch (action.type) {
    case 'FETCHING_OPPS':
      return {
        ...state,
        fetchingOpps: true
      }
    case 'DONE_FETCHING_OPPS':
      return {
        ...state,
        fetchingOpps: false
      }
    case 'SET_OPPS':
      return {
        ...state,
        opps: action.data
      }
    case 'ERROR':
      return {
        ...state,
        errorMessage: action.text
      }
    default:
      return state
  }
}

export default dashState