import React, { Component } from "react";
class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sehad_leftbar">
        <ul className="nav">
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">MENU</a>
          </li>
          <li>
            <a href="#">MENU</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftBar;
