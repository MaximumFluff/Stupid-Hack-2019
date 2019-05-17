import React, { Component } from 'react';

class RegistrationUsername extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      error: false,
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  blur = () => {
    console.log('blurred')
    this.checkForErrors();
  }

  checkForErrors = () => {
    let error = false;
    const uppercase = /[A-Z]+/;
    const lowercase = /[a-z]+/;
    const digit = /[0-9]+/;

    if (this.state.username.length > 6) error = true;
    if (!this.state.username.match(uppercase)) console.log('no uppercase letters');
    if (!this.state.username.match(lowercase)) console.log('no lowercase letters');
    if (!this.state.username.match(digit)) console.log('no digits');
  }

  render() {
    return (
      <div className="Component">
        <h4>username</h4>
        <input
          id="username"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInput}
          onBlur={this.blur}
        />
        <h5 id="error">{this.state.error ? 'fucking error mate' : null}</h5>
      </div>
    );
  }
}

export default RegistrationUsername;