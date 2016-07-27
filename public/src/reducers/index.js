import { combineReducers} from 'redux'

import posts from './PostsReducer'
import user from './UsersReducer'

export default combineReducers({
  posts,
  user
})
