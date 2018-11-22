import React, { Component } from "react";
import Logo from "./logo";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="navCon">
        <Logo height="40px" width="40px" />
      </nav>
    );
  }
}

export default Navbar;
