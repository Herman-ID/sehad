import React, { Component } from "react";
import Menu from "./menu";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-9">
        <div className="sehad__content" />

        <Menu />
      </div>
    );
  }
}

export default Content;
