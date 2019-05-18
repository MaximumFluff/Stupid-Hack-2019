import React from 'react';

class Username extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ""};
  }
  
  onChange = event => {
    const inputString = event.target.value;
    if (inputString.length > 8) {
      alert("Password must be less than 8 characters!")
    }
  }
  
  render() {
    return(
      <div>
        <input type="password" name="username" onChange={this.onChange}/>
      </div>
    )
  }
}

export default Username;