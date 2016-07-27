import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { fetchPosts, addPost } from '../actions/postsActions'

import Header from './Header'

import PostForm from '../components/postForm'
import PostList from '../components/postList'

@connect((store) => {
  return {
    posts: store.posts.posts,
    user: store.user
  }
})

export default class Layout extends React.Component {
  componentWillMount() {
    if (this.props.user.user.username && this.props.user.email) {
      this.props.dispatch(fetchPosts())
    } else {
      return
    }
  }

  fetchPosts() {
    this.props.dispatch(fetchPosts())
  }

  addPost(newPost) {
    this.props.dispatch(addPost(newPost))
  }

  render() {
    const posts = this.props.posts

    if (!this.props.user.user.username && !this.props.user.email) {
      return (
        <p>You need to be logged in! <Link to="/login">Please Login.</Link></p>
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
