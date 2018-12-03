import React, { Component } from "react";
import Article from "./article";
import About from "./about";
import Gallery from "../gallery/gallery";
import Pemetaan from "../maps/pemetaan";



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
            <Pemetaan />
          ) : this.state.jenis === "gallery" ? (
            <Gallery setTumbuhan={this.props.setTumbuhan} />
          ) : this.state.jenis === "article" ? (
            <Article data={this.props.content} jenis={this.props.jenis} />
          ) : (
                  ""
                )}
        </div>
      </div>
    );
  }
}

export default Content;
