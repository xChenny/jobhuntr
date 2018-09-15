// Action creators used for Redux for the Applications view

export const add = application => {
  return {
    type: 'ADD',
    application
  }
}

export const remove = appId => {
  return {
    type: 'REMOVE',
    appId
  }
}