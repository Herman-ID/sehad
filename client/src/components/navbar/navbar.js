import React, { Component } from "react";
import Logo from "./logo";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="sehad_navbar row">
        <img className="sehad_logo" />
        <Logo />
        <div className="menu_right row">
          <button className="sehad_btn_rm">+</button>
          <button className="sehad_btn_rm">+</button>
          <button className="sehad_btn__menu">=</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
