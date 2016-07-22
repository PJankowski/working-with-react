import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <a href="#" className="brand">PhotoGram</a>

          <input type="text" className="search" placeholder="Search ..."/>

          <ul className="nav">
            <li><a href="#">Explore</a></li>
            <li><a href="#">Friends</a></li>
            <li><a href="#">Account</a></li>
          </ul>
        </div>
      </header>
    )
  }
}
