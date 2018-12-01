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

    this.onDataComing = this.onDataComing.bind(this);
    this.pindahMenu = this.pindahMenu.bind(this);
  }
  onDataComing(message, tp = "article") {
    this.setState({ msg: message, type: tp });
  }
  pindahMenu(text) {
    this.props.OnMenuClick();
    if (text === "about") {
      this.setState({ type: "about", msg: "" });
      console.log(text);
    }
  }
  render() {
    return (
      <div className="sehad__container row">
        <React.Fragment>
          <Content type={this.state.type} content={this.state.msg} />
          <Chatbot
            onDataComing={this.onDataComing}
            url={this.state.urlsegment}
            selesai={this.selesai}
            isfinish={this.state.selesai}
          />
        </React.Fragment>
        <BigMenu hidden={this.props.menu} pindahmenu={this.pindahMenu} />
        <div className="one-top" />
        <div className="two-top" />
      </div>
    );
  }
}

export default Home;
