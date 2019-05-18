import React from 'react';
import './App.css';
import Form from './components/Form';
import Forgot from './components/Forgot';
import FirstAndLastName from './components/FirstAndLastName';
import Username from './components/Username';
import Email from './components/Email';
import Gender from './components/Gender';
import RegistrationPhonenumber from './components/RegistrationPhonenumber';
import RegistrationUsername from './components/RegistrationUsername';
import RegistrationPassword from './components/RegistrationPassword';
import LoginPassword from './components/LoginPassword';

class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", margin: 20, padding: 20 }}>
        <Form />
      </div>
    );
  }
}


export default App;
