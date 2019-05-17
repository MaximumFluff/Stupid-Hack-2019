import React from 'react';
import './App.css';

import RegistrationPhonenumber from './components/RegistrationPhonenumber';
import RegistrationUsername from './components/RegistrationUsername';
import RegistrationPassword from './components/RegistrationPassword';
import LoginPassword from './components/LoginPassword';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RegistrationPhonenumber />
        <RegistrationUsername />
        <RegistrationPassword />
        <LoginPassword />
      </div>
    );
  }
}

export default App;
