import React, { Component } from "react";

class ToggleBtnComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };
  }

  handleClick = () => {
    this.setState({
      isOn: !this.state.isOn
    });
  };

  render() {
    return (
      <div style={{
        textAlign: "center",
        margin: "10px"
      }}>
        <hr />
        <h2>{this.state.isOn ? "ON" : "OFF"}</h2>

        <button onClick={this.handleClick} style={{backgroundColor: "red"}}>
          Toggle
        </button>
        <hr />
      </div>
    );
  }
}

export default ToggleBtnComp;