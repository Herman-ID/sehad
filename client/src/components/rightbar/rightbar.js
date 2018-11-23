import React, { Component } from "react";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sehad_rightbar">
        <button className="rightbar_up">SELANJUTNYA</button>
        <button className="rightbar_down">SEBELUMNYA</button>
      </div>
    );
  }
}

export default Navbar;
