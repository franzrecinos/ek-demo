export const init = {
  busy: false,
  property: null,
  error: null,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'PROPERTY_FETCH':
      return {
        ...state,
        busy: true,
        error: null,
      }
    case 'PROPERTY_FETCH_FULFILLED':
      return {
        ...state,
        busy: false,
        property: action.payload,
      }
    case 'PROPERTY_FETCH_REJECTED':
      return {
        ...state,
        busy: false,
        error: action.payload,
        property: null,
      }
    default:
      return state
  }
}
