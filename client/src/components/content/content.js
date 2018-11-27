import React, { Component } from "react";
import Menu from "./menu";
import Article from "./article";
import About from "./about";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenis: "article"
    };
  }

  render() {
    return (
      <div className="col-9">
        <div className="sehad__content">
          {this.state.jenis === "about" ? (
            <About />
          ) : this.state.jenis === "article" ? (
            <Article />
          ) : (
            ""
          )}
        </div>
        <Menu />
      </div>
    );
  }
}

export default Content;
