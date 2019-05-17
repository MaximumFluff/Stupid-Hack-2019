import React, { Component } from 'react';

class LoginPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPassword: '#ffffff',
      password: '#000000',
      guessesWrong: 0,
      encouragements: [
        'try again',
        'try harder',
        'are you even trying..?'
      ],
      errorText: '',
      error: false,
      success: false,
    };
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  login = () => {
    if (this.state.userPassword !== this.state.password && !this.state.success) {
      let guessesWrong = this.state.guessesWrong;
      const encouragement = this.state.encouragements[guessesWrong];
      if (guessesWrong < this.state.encouragements.length-1) guessesWrong++;
      this.setState({
        guessesWrong,
        errorText: encouragement,
        error: true,
      });
    } else {
      console.log('SUCCESS');
      this.setState({ error: false, success: true });
    }
  }

  suggestion = () => {
    'http://thecolorapi.com/id?hex=ffffff&format=json'
  }

  render() {
    return (
      <div className="Component">
        <p>{this.state.password}</p>
        <input name="password" type="color" onChange={this.handleInput} />
        <input type="button" value="LOGIN" onClick={this.login} />
        {this.state.error ? <p className="error">{this.state.errorText}</p> : null}
        {this.state.success ? <p className="success">YOU DID IT!</p> : null}
      </div>
    );
  }
}

export default LoginPassword;
