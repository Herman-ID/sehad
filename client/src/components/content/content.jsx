import React, { Component } from "react";
import Article from "./article";
import About from "./about";
import Gallery from "../gallery/gallery";
import Pemetaan from "../maps/pemetaan";
import Tumbuhanmap from "../maps/tumbuhanmap";
import Klasifikasi from "../klasifikasi/klasifikasi";


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenis: this.props.type
    };
  }
  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.type !== this.state.jenis) {
      this.setState({ jenis: nextProps.type });
    }
  }
  render() {
    return (
      <div className="col-8">
        <div className="sehad__content">
          {this.state.jenis === "about" ? (
            <About />
          ) : this.state.jenis === "gallery" ? (
            <Gallery setTumbuhan={this.props.setTumbuhan} />
          ) : this.state.jenis === "article" && this.props.jenis !== "peta" ? (
            <Article data={this.props.content} jenis={this.props.jenis} />
          ) : this.state.jenis === "pemetaan" ? (
            <Pemetaan />
          ) : this.props.jenis === "peta" ? (
            <Tumbuhanmap data={this.props.content} />
          ) : this.state.jenis === "klasifikasi" ? (
            <Klasifikasi />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Content;
