export default function reducer(state = {
  user: {},
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "REGISTER_USER": {
      return {...state, fetching: true}
      break
    }
    case "REGISTER_USER_REJECTED": {
      return {...state, fetching: false, error: action.payload}
      break
    }
    case "REGISTER_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      }
    }
    break
  }

  return state
}
