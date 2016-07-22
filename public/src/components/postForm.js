import React from 'react'

import DropZone from 'react-dropzone'

export default class PostForm extends React.Component {
  constructor() {
    super()
    this.state = {
      files: []
    }
  }

  addPost(e) {
    e.preventDefault()
    var newPost = {
      postName: this.refs.name.value,
      image: this.state.files[0]
    }
    this.props.addPost(newPost)
  }

  fileDropped(files) {
    this.setState({
      files: files
    })
  }

  render() {
    var styles = {
      width: '100%',
      'border': '2px solid #47b8e0',
      'height': '200px',
      'borderRadius': '5px',
      'lineHeight': '200px',
      'textAlign': 'center'
    }

    return (
      <form className="addPostForm" onSubmit={this.addPost.bind(this)}>
        <h2>Add New Post</h2>
        <input type="text" placeholder="Post Name" ref="name" />
        <DropZone onDrop={this.fileDropped.bind(this)} multiple={false} style={styles}>
          <p>Drag and drop your image here.</p>
        </DropZone>
        {this.state.files.length > 0 ? <div>
          <div className="preview">{this.state.files.map((file) => <img src={file.preview} key={file.size} /> )}</div>
        </div> : null}
        <button>Add Post</button>
      </form>
    )
  }
}
