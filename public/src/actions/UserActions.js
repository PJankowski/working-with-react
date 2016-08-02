import axios from 'axios'

export function registerUser(user) {
  console.log(user)
  return function(dispatch) {

    axios.post('/api/user/register', user)
      .then((response) => {
        dispatch({type: "REGISTER_USER_FULFILLED", payload: response.data})
      })
      .catch((error) => {
        dispatch({type: "REGISTER_USER_REJECTED", payload: error.error})
      })
  }
}
