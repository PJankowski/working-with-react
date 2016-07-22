import React from 'react'
import { browserHistory } from 'react-router'

var errors = []

export default class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: []
    }
  }

  register(e) {
    e.preventDefault()
    this.setState({
      errors: []
    })

    errors = []

    if (this.refs.email.value === "") {
      errors.push("An email is required")
    }

    if (this.refs.username.value === "") {
      errors.push("A username is required")
    }

    if (this.refs.password.value === "") {
      errors.push("A password is required")
    }

    if (errors.length > 0) {
      this.setState({errors: errors})
      return
    } else {
      this.props.history.push('/app')
    }
  }

  render() {
    return (
      <form style={formStyles} onSubmit={this.register.bind(this)}>
        <h2 style={headingStyles}>Welcome to PhotoGram</h2>
        <p style={paragraphStyles}>Please register to continue.</p>
        <input style={inputStyles} type="email" ref="email" placeholder="Email" />
        <input style={inputStyles} type="text" ref="username" placeholder="Username" />
        <input style={inputStyles} type="password" ref="password" placeholder="Password" />
        <button style={buttonStyles}>Register</button>
        { this.state.errors.length > 0 ? <div>
          { this.state.errors.map((err) => <span style={errorStyles}>{ err }</span>) }
        </div> : null }
      </form>
    )
  }
}

var formStyles = {
  margin: "100px auto",
  padding: "50px",
  width: "800px"
}

var inputStyles = {
  display: "block",
  margin: "20px auto",
  padding: "20px 10px",
  width: "100%",
  outline: "none",
  border: "2px solid #34314c",
  color: "#34314c",
  fontSize: "18px"
}

var buttonStyles = {
  background: "#34314c",
  padding: "8px 18px",
  color: "#FFFFFF",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
  outline: "none",
  marginBottom: "10px"
}

var errorStyles = {
  color: "#ff7473",
  display: "block",
  marginBottom: "10px"
}

var headingStyles = {
  color: "#34314c",
  textAlign: "center",
  fontSize: "32px",
  display: "block",
  marginBottom: "10px"
}

var paragraphStyles = {
  textAlign: "center",
  display: "block",
  marginBottom: "10px"
}
