import axios from 'axios'

export function registerUser() {
  return function(dispatch) {
    axios.post('/api/user/register')
      .then((response) => {
        dispatch({type: "REGISTER_USER_FULFILLED", payload: response.data})
      })
      .catch((error) => {
        dispatch({type: "REGISTER_USER_REJECTED", payload: error.error})
      })
  }
}
