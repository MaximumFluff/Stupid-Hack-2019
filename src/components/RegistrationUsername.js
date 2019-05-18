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
    const uppercase = /[A-Z]+/;
    const lowercase = /[a-z]+/;
    const digit = /[0-9]+/;
    const specialCharacter = /[!@#$%^&*)¤"(\\+=._-]+/;

    const usernameError = this.state.username.length >= 6;
    const uppercaseError = this.state.username.match(uppercase) ? true : false;
    const lowercaseError = this.state.username.match(lowercase) ? true : false;
    const digitError = this.state.username.match(digit) ? true : false;
    const specialCharacterError = this.state.username.match(specialCharacter) ? true : false;

    if (usernameError && uppercaseError && lowercaseError && digitError && specialCharacterError) {
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }

    console.log(usernameError, uppercaseError, lowercaseError, digitError, specialCharacterError);
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
        <h5 className="error">{this.state.error ? 'fucking error mate' : null}</h5>
      </div>
    );
  }
}

export default RegistrationUsername;