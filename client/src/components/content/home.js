import React, { Component } from "react";
import Chatbot from "../chatbot/chatbot";
import Content from "./content";
import BigMenu from "../bigmenu/bigmenu";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      type: "about"
    };
    this.style = {
      height: "100vh",
      width: "30%",
      background: "red"
    };
    this.onDataComing = this.onDataComing.bind(this);
  }
  onDataComing(message) {
    this.setState({ msg: message.data, type: "article" });
  }
  render() {
    return (
      <div className="sehad__container row">
        {this.props.menu === false ? (
          <React.Fragment>
            <Content type={this.state.type} content={this.state.msg} />
            <Chatbot onDataComing={this.onDataComing} />
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
