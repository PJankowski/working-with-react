import React from 'react'
import { connect } from 'react-redux'

import { fetchPosts, addPost } from '../actions/postsActions'

import Header from './Header'

import PostForm from '../components/postForm'
import PostList from '../components/postList'

@connect((store) => {
  return {
    posts: store.posts.posts
  }
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPosts())
  }

  fetchPosts() {
    this.props.dispatch(fetchPosts())
  }

  addPost(newPost) {
    this.props.dispatch(addPost(newPost))
  }

  render() {
    const posts = this.props.posts

    if (!posts.length) {
      return (
        <main>
          <Header />
          <button onClick={this.fetchPosts.bind(this)}>Fetch Posts</button>
        </main>
      )
    }

    return (
      <main>
        <Header />

        <div className="container">
          <PostForm addPost={this.addPost.bind(this)}/>

          <PostList posts={posts} />
        </div>
      </main>
    )
  }
}
