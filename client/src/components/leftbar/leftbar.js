import React, { Component } from "react";
class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sehad_leftbar">
        <div className="sehad_leftbar__accent" />
        <ul className="nav">
          <li>
            <a href="#">ID</a>
          </li>
          <li>
            <a href="#">EN</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftBar;
