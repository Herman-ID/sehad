import React, { Component } from "react";
import Logo from "./logo";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="sehad_navbar row">
          <img className="sehad_logo" />
          <Logo />
          <div className="menu_right row">
            <button className="sehad_btn_rm">+</button>
            <button className="sehad_btn_rm">+</button>
            <button className="sehad_btn__menu">=</button>
          </div>
        </nav>

        <div className="sehad_rightbar">
          <button className="rightbar_up">SELANJUTNYA</button>
          <button className="rightbar_down">SEBELUMNYA</button>
        </div>
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
      </div>
    );
  }
}

export default Navbar;
