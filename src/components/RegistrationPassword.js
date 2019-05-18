import React, { Component } from 'react';

class RegistrationPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '#000000',
    };
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <p>Choose your password</p>
        <div className="registrationPassword">
          <input name="password" type="color" onChange={this.handleInput} />
          <p>{this.state.password}</p>
        </div>
      </div>
    );
  }
}

export default RegistrationPassword;
