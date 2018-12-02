import React, { Component } from "react";
import logo from "../../asset/img/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="sehad_navbar row">
        <div id="share">

          <a class="facebook" href="https://www.facebook.com/share.php?u={{url}}" target="blank"><i className="fab fa-facebook-f"></i></a>
          <a class="twitter" href="https://twitter.com/intent/tweet?status={{title}}+{{url}}" target="blank"><i className="fab fa-twitter"></i></a>
          <a class="googleplus" href="https://plus.google.com/share?url={{url}}" target="blank"><i className="fab fa-google-plus-g"></i></a>

        </div>
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
