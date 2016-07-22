import React from 'react'

import moment from 'moment'

export default class Post extends React.Component {
  render() {
    const { avatar, time, postName, image } = this.props

    var formattedTime = moment(time).format('ddd e, gggg')

    return (
      <article className="post">
        <div className="post-header">
          <a href="#">
            <img className="avatar" src={ avatar } />

            <h3 className="name">{ postName }</h3>
          </a>

          <span className="time-ago">{ formattedTime }</span>
        </div>

        <img className="post-image" src={ image } />

        <div className="post-footer">
          <input type="text" placeholder="Add comment ..." />
        </div>
      </article>
    )
  }
}
