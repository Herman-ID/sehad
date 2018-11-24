import React, { Component } from "react";
import logo from "../../asset/img/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="sehad_navbar row">
        <img src={logo} className="sehad_logo" alt="logo sehad" />
        <div className="menu_right row">
          <button className="sehad_btn__menu" onClick={this.props.OnMenuClick}>
            {this.props.menu === true ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )}
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
