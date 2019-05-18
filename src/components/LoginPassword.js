import React, { Component } from 'react';
import axios from 'axios';

class LoginPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPassword: '#000000',
      password: '#000000',
      wrongAnwers: 0,
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
    this.setState({ [e.target.name]: e.target.value });
  }

  login = () => {
    if (this.state.userPassword !== this.state.password && !this.state.success) {
      let wrongAnwers = this.state.wrongAnwers;
      const encouragement = this.state.encouragements[wrongAnwers];
      if (wrongAnwers <= this.state.encouragements.length-1) {
        wrongAnwers++;;
      } else {
        this.suggestion();
      }
      this.setState({
        wrongAnwers,
        errorText: encouragement,
        error: true,
      });
    } else {
      console.log('SUCCESS');
      this.setState({ error: false, success: true });
    }
  }

  suggestion = () => {
    const color = this.state.userPassword.slice(1);
    console.log(color);
    
    const request = {
      method: 'get',
      url: `http://localhost:3001?hex=${color}`
    };
    
    axios(request)
      .then(response => {
        console.log(response.data);
        // We take security very seriously and that is why we give a vague hint of the color. See below.
        const hint = `${response.data}ish`;
        
        this.setState({ errorText: `Hint: it's ${hint}` });
      })
      .catch(error => console.log(error));

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
