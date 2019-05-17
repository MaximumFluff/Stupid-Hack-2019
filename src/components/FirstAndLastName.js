import React from 'react';

class FirstAndLastName extends React.Component {
  
  onChange = event => {
    const firstLetter = event.target.value.charAt(0);
    if (firstLetter !== firstLetter.toUpperCase()) {
      alert("First letter has to be capitalized!");
    }
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  
  render() {
    return (
      <div>
        <input name="first" type="text" onChange={this.onChange}/>
        <input name="last" type="text" onChange={this.onChange}/>
      </div>
    )
  }
}