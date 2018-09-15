
/**
 * Function to find the index of the removed application within 'arr'
 * @param {Array} arr 
 * @param {Number} id 
 */
const findRemovedApplication = (arr, id) => {
  return arr.findIndex(ele => ele === id)
}

const appState = (state = {apps: []}, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        apps: state.apps.concat(action.application)
      }
    case 'REMOVE':
      const removedId = findRemovedApplication(state.apps, action.appId)
      return {
        ...state,
        apps: [...state.apps.slice(0, removedId), ...state.apps.slice(removedId)]
      }
    default:
      return state
  }
}

export default appState