import React from 'react'

import Post from './post.js'

export default class PostList extends React.Component {
  render() {
    const posts = this.props.posts

    const PostComponent = posts.map((post) => {
      return <Post key={post._id} {...post} />
    })

    return (
      <div className="list">
        { PostComponent }
      </div>
    )
  }
}
