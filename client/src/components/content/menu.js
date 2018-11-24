import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav class="menu_content navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
          <ul class="navbar-nav mr-auto text-center">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Tumbuhan
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
