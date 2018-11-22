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
      <nav class="sehad_navbar row">
        <img class="sehad_logo"></img>
        <Logo />
        <div class="menu_right row">
            <button class="sehad_btn_rm">+</button>
            <button class="sehad_btn_rm">+</button>
          <button class="sehad_btn__menu">=</button>
        </div>
      </nav>
      
      <div class="sehad_rightbar">
        <button class="rightbar_up">
          SELANJUTNYA
        </button>
        <button class="rightbar_down">
        SEBELUMNYA
          </button>
      </div>
      <div class="sehad_leftbar">
          <ul class="nav">
            <li><a href="#">MENU</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="#">MENU</a></li>
          </ul>
    </div>
   </div>
    );
  }
}

export default Navbar;
