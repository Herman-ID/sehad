import React, { Component } from "react";
class LeftBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handledata(data) {
    localStorage.setItem("bahasa", data);
  }
  render() {
    return (
      <div className="sehad_leftbar">
        <div className="sehad_leftbar__accent" />
        <ul className="nav">
          <li>
          </li>
          <li>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftBar;
