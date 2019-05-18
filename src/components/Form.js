/*
            <TextField
              label="Email"
              type="email"
              name="email"
              margin="normal"
              value={this.state.email}
              onChange={this.handleInput}
              error={this.state.emailError}
              helperText={this.state.emailError ? this.state.emailErrorMessage : ''}
            />

*/

import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  Input,
  TextField,
  Tab,
  Tabs,
} from "@material-ui/core";

import RegistrationPassword from './RegistrationPassword';
import RegistrationPhonenumber from './RegistrationPhonenumber';
import LoginPassword from './LoginPassword';

class RegisTration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      city: '',
      cityTwo: '',
      username: '',
      password: '#000000',
      email: '',
      firstNameError: false,
      firstNameErrorMessage: "Grammar!",
      surnameError: false,
      surnameErrorMessage: "... GRAMMAR!",
      cityError: false,
      cityErrorMessage: "The hobbits are going to Isengard",
      cityTwoError: false,
      cityTwoErrorMessage: "They can't be the same city lel",
      usernameError: false,
      usernameErrorMessage: "sadasd",
      passwordError: false,
      passwordErrorMessage: "bazinga",
      emailError: false,
      emailErrorMessage: 'No SpECIaL characters. @ has to be AT...',
    }
  }

 handleFirstnameInput = (e) => {
  this.setState({ [e.target.name]: e.target.value }, () => {
    const firstLetter = this.state.firstName.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      this.setState({ firstNameError: true })
    } else {
      this.setState({ firstNameError: false})
    }
  });
 }

 handleSurnameInput = (e) => {
  this.setState({ [e.target.name]: e.target.value }, () => {
    const firstLetter = this.state.surname.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      this.setState({ surnameError: true })
    } else {
      this.setState({ surnameError: false})
    }
  });
 }
 
 handleCityInput = (e) => {
   this.setState({ [e.target.name]: e.target.value }, () => {
    const inputString = this.state.city;
    if (inputString !== "Isengard") {
      this.setState({ cityError: true })
    }
    else {
      this.setState({ cityError: false })
    }
   })
 }

  handleEmailInput = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      const email = this.state.email;
      if ((email.includes(".") || email.includes("@")) && (!email.includes("AT") || !email.includes("DOT"))) {
        this.setState({ emailError: true });
      } else {
        this.setState({ emailError: false });
      }
    });
  }
  
  handleUsernameInput = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      console.log(this.state.username)
      const uppercase = /[A-Z]+/;
      const lowercase = /[a-z]+/;
      const digit = /[0-9]+/;
      const specialCharacter = /[!@#$%^&*)¤"(\\+=._-]+/;

      const usernameError = this.state.username.length >= 6;
      const uppercaseError = this.state.username.match(uppercase) ? true : false;
      const lowercaseError = this.state.username.match(lowercase) ? true : false;
      const digitError = this.state.username.match(digit) ? true : false;
      const specialCharacterError = this.state.username.match(specialCharacter) ? true : false;

      let errorText = '';

      if (!usernameError) errorText += 'has to be at least 6 characters long';
      if (!uppercaseError) errorText += ', must contain at least one lower case letter';
      if (!lowercaseError) errorText += ', must contain one upper case letter';
      if (!digitError) errorText += ', must contain one digit';
      if (!specialCharacterError) errorText += ', must contain one of these special characters ~!@#$%^&*()_+';

      console.log(usernameError, uppercaseError, lowercaseError, digitError, specialCharacterError);

      if (usernameError && uppercaseError && lowercaseError && digitError && specialCharacterError) {
        this.setState({ usernameError: false });
      } else {
        this.setState({ usernameError: true, usernameErrorMessage: errorText });
      }
    });
  }

  handleCityTwo = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.city === this.state.cityTwo) {
        this.setState({ cityTwoError: true  })
      }
      else {
        this.setState({ cityTwoError: false })
      }
    })
  }

  render() {
    return (
      
      <div style={{ display: "flex-column", justifyContent: "center", margin: 20, padding: 20 }}>
        <form style={{ width: "100%" }}>
          <h1>ReGIStrATioN</h1>
          
          <TextField style={{border: 'none', borderStyle: 'inset dotted solid'}}
            label="First name"
            error={this.state.firstNameError}
            helperText={this.state.firstNameError ? this.state.firstNameErrorMessage : ''}
            value={this.state.firstName}
            onChange={this.handleFirstnameInput}
            type="text"
            margin="normal"
            name="firstName"
          />

          <TextField style={{border: 'none', borderStyle: 'double dashed dashed none'}}
            label="The other name"
            error={this.state.surnameError}
            helperText={this.state.surnameError ? this.state.surnameErrorMessage : ''}
            value={this.state.surname}
            onChange={this.handleSurnameInput}
            type="text"
            margin="normal"
            name="surname"
          />

          <TextField style={{border: 'none', borderStyle: 'dashed groove none dotted'}}
            label="City"
            error={this.state.cityError}
            helperText={this.state.cityError ? this.state.cityErrorMessage : ''}
            onChange={this.handleCityInput}
            value={this.state.city}
            type="text"
            margin="normal"
            name="city"
          />

          <TextField style={{border: 'none', borderStyle: 'dotted'}}
            label="Email"
            error={this.state.emailError}
            helperText={this.state.emailError ? this.state.emailErrorMessage : ''}
            value={this.state.email}
            onChange={this.handleEmailInput}
            type="text"
            margin="normal"
            name="email"
          />

          <div>
            <Checkbox style={{paddingTop: 100}} label="Gender" /> Gender
          </div>

          <TextField style={{border: 'none', borderStyle: 'dotted solid dotted inset'}}
            label="Username"
            error={this.state.usernameError}
            helperText={this.state.usernameError ? this.state.usernameErrorMessage : ''}
            type="text"
            margin="normal"
            name="username"
            onChange={this.handleUsernameInput}
            value={this.state.username}
          />

          <RegistrationPassword />

          <TextField style={{border: 'none', borderStyle: 'solid dashed', display: 'flex'}}
            label="The other City"
            error={this.state.cityTwoError}
            helperText={this.state.cityTwoError ? this.state.cityTwoErrorMessage : ''}
            onChange={this.handleCityTwo}
            value={this.state.cityTwo}
            type="text"
            margin="normal"
            name="cityTwo"
          />

          
          <RegistrationPhonenumber />


          <Button variant="contained" color="secondary" size="large" style={{color: '#E97D35', border: 'none', borderStyle: 'dotted'}}>
            Register m8
          </Button>

        </form>

      </div>
    );
  }
}

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storedUsername: 'Username69!',
      username: '',
      usernameError: false,
      usernameErrorMessage: 'nah mate',
    };
  }

  checkUsername = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.username !== this.state.storedUsername) {
        this.setState({ usernameError: true })
      } else {
        this.setState({ usernameError: false });
      }
    })
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20, padding: 20 }}>
        <div>
          <form style={{ width: "100%" }}>
            <h1>Just LoGiN 4head</h1>
            <TextField style={{border: 'none', borderStyle: 'dotted dashed dotted inset'}}
              label="Username"
              error={this.state.usernameError}
              helperText={this.state.usernameError ? this.state.usernameErrorMessage : ''}
              type="password"
              margin="normal"
              name="username"
              value={this.state.username}
              onChange={this.checkUsername}
            />
            <LoginPassword />
          </form>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20, padding: 20 }}>
        <div>
          <BrowserRouter>

            <AppBar position="static" color="default">
              <Tabs indicatorColor="primary" textColor="primary" fullWidth>
                <Tab label="ReGIsTraTIoN" component={Link} to="/one" />
                <Tab label="LoGIn m8" component={Link} to="/two" />
              </Tabs>
            </AppBar>

            <Switch>
              <Route path="/one" component={(RegisTration)} />
              <Route path="/two" component={(LogIn)} />
            </Switch>

          </BrowserRouter>
        </div>
      </div>
    );
  }
}


export default Form;
