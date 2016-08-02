import axios from 'axios'

export function fetchPosts() {
  return function(dispatch) {
    axios.get('/api/posts')
      .then((response) => {
        dispatch({type: "FETCH_POSTS_FULFILLED", payload: response.data})
      })
      .catch((error) => {
        dispatch({type: "FETCH_POSTS_REJECTED", payload: error.error})
      })
  }
}

export function addPost(post) {
  return function(dispatch) {
    var data = new FormData()
    data.append('postName', post.postName)
    data.append('image', post.image)

    var config = {
      progress: function(progressEvent) {
        console.log((progressEvent.loaded / progressEvent.total) + '%')
      }
    }

    axios.post('/api/post', data, config)
      .then((response) => {
        dispatch({type: "ADD_POST_FULFILLED", payload: response.data})
      })
      .catch((error) => {
        dispatch({type: "ADD_POST_REJECTED", payload: error.err})
      })
  }
}
