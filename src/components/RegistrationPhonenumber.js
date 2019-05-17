import React from 'react';
import '../App.css';

class RegistrationPhonenumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      numbers: [0,1,2,3,4,5,6,7,8,9],
      phoneNumber: '',
    };
  }

  componentDidMount() {
    document.getElementById("incrementingNumber").addEventListener('click', () => this.addNumber());
    setInterval(() => {
      this.increment();
    }, 400);
  }

  addNumber = () => {
    let phoneNumber = this.state.phoneNumber;
    phoneNumber += this.state.number;
    this.setState({ phoneNumber });
  }

  increment = () => {
    let number = this.state.number;
    if (number >= 9) {
      number = 0;
    } else {
      number++;
    }
    this.setState({ number });
  }

  reset = () => {
    this.setState({ phoneNumber: ''});
  }

  render() {
    return (
      <div className="Component">
        <p id="incrementingNumber">{this.state.number}</p>
        <input disabled type="text" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} />
        <input id="phoneNumberReset" type="button" value="TRY AGAIN" onClick={this.reset} />
      </div>
    );
  }
}

export default RegistrationPhonenumber;
