export default function reducer(state = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCH_POSTS": {
      return {...state, fetching: true}
    }
    case "FETCH_POSTS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_POSTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload,
      }
    }
    case "ADD_POST": {
      return {...state}
    }
    case "ADD_POST_FULFILLED": {
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    }
    case "ADD_POST_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
  }

  return state
}
