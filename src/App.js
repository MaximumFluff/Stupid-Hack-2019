import React from 'react';
import './App.css';

import RegistrationPhonenumber from './components/RegistrationPhonenumber';
import RegistrationUsername from './components/RegistrationUsername';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <RegistrationPhonenumber />
        <RegistrationUsername />
      </div>
    );
  }
}

export default App;
