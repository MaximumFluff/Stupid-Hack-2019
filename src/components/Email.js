import React from 'react';

export default class Email extends React.Component {
  constructor(props) {
    super(props)
    this.state = { typed: "" }
  }

  onChange = event => {
    const inputString = event.target.value;
    if ((inputString.includes(".") || inputString.includes("@")) && (!inputString.includes("AT") || !inputString.includes("DOT"))) {
      alert("No special characters. I.e. @ has to be AT, .(dot) has to be DOT");
    }
    this.setState({
      typed: inputString,
    })
  }

  render() {
    return(
      <div style={{
        /* Insert styles here later PogChamp  */
        width: 400,
        height: 200,
      }}>
        <input type="text" onChange={this.onChange} />
      </div>
    )
  }
}