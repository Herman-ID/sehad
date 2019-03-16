import React, { Component } from "react";
import Chatbot from "../chatbot/chatbot";
import Content from "./content";
import BigMenu from "../bigmenu/bigmenu";
import SiteMap from "../sitemap/sitemap";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      jenis: "",
      type: "about",
      toChat: {
        type: "",
        content: "",
        status: false
      }
    };

    this.onDataComing = this.onDataComing.bind(this);
    this.pindahMenu = this.pindahMenu.bind(this);
    this.setTumbuhan = this.setTumbuhan.bind(this);
  }
  onDataComing(message, tp = "article") {
    this.setState({ msg: message, type: tp, jenis: message.type });
    console.log(message);
  }

  pindahMenu(text, menu = true) {
    menu === true ?
      (this.props.OnMenuClick()) : null
    if (text === "about") {
      this.setState({ type: "about", msg: "" });
    } else if (text === "gallery_tumbuhan") {
      this.setState({ type: "gallery", msg: "tumbuhan" });
    } else if (text === "pemetaan") {
      this.setState({ type: "pemetaan", msg: "" });
    } else if (text === "klasifikasi") {
      this.setState({ type: "klasifikasi", msg: "" });
    }
  }
  setTumbuhan(data) {
    this.setState({
      toChat: {
        type: data.type,
        content: data.content,
        status: true
      }
    });
  }

  render() {
    return (
      <div className="sehad__container row">
        <React.Fragment>
          <Content
            type={this.state.type}
            setTumbuhan={this.setTumbuhan}
            content={this.state.msg}
            jenis={this.state.jenis} />
          <Chatbot
            onDataComing={this.onDataComing}
            url={this.state.urlsegment}
            isfinish={this.state.selesai}
          />
            {

            }
        </React.Fragment>
        <BigMenu hidden={this.props.menu} pindahmenu={this.pindahMenu} />
        <SiteMap pindahmenu={this.pindahMenu} />
        {/* <div className="one-top" />
        <div className="two-top" /> */}
      </div>
    );
  }
}

export default Home;
