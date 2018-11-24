import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div className="isi_menu">
        <a href={this.props.link}>
          <i className={"fas fa-" + this.props.icon} />
          <h5>{this.props.kata}</h5>
        </a>
      </div>
    );
  }
}

export default Link;
