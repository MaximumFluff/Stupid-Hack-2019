import React, { Component } from 'react';

class RegistrationPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="Component">
        <p>Choose your password</p>
        <input name="password" type="color" onChange={this.handleInput} />
        <p>{this.state.password}</p>
      </div>
    );
  }
}

export default RegistrationPassword;
