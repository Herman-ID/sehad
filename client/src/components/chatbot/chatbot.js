import React, { Component } from "react";

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.style = {
      height: "100vh",
      width: "30%",
      background: "red"
    };
  }

  render() {
    return <div style={this.style} />;
  }
}

export default Chatbot;
