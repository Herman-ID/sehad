import React, { Component } from "react";
import Chatbot from "../chatbot/chatbot";
import Content from "./content";
import BigMenu from "../bigmenu/bigmenu";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 1
    };
    this.style = {
      height: "100vh",
      width: "30%",
      background: "red"
    };
  }

  render() {
    return (
      <div className="sehad__container row">
        {this.props.menu == false ? (
          <React.Fragment>
            <Content />
            <Chatbot />
          </React.Fragment>
        ) : (
          <BigMenu />
        )}
        <div className="one-top" />
        <div className="two-top" />
      </div>
    );
  }
}

export default Home;
