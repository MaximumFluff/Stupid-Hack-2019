import React from 'react';
import './App.css';
import Forgot from './components/Forgot';
import FirstAndLastName from './components/FirstAndLastName';
import Username from './components/Username';
import Email from './components/Email';
import Gender from './components/Gender';

function App() {
  return (
    <div className="App">
      <FirstAndLastName />
      <Username />
      <Email />
      <Gender />
      <Forgot/>
    </div>
  );
}

export default App;
