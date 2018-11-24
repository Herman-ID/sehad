import React, { Component } from "react";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sehad_rightbar row">
        <button className="rightbar_down">
          <i className="fas fa-caret-left" />
        </button>
        <button className="rightbar_up">
          <i className="fas fa-caret-right" />
        </button>
      </div>
    );
  }
}

export default Navbar;
