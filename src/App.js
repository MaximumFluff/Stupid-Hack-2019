import React from 'react';
import './App.css';
import Form from './components/Form';


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
