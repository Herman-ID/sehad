import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="menu_content navbar navbar-expand-lg navbar-light bg-light">
        {/* <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
          <ul className="navbar-nav ml-auto text-center">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
          <ul className="navbar-nav mr-auto text-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tumbuhan
              </a>
            </li>
          </ul>
        </div> */}
      </nav>
    );
  }
}

export default Menu;
