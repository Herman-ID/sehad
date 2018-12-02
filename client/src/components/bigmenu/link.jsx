import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <a
        onClick={() => {
          this.props.click(this.props.link);
        }}
        className="isi_menu"
      >
        <div>
          <i className={"fas fa-" + this.props.icon} />
          <h5>{this.props.kata}</h5>
        </div>
      </a>
    );
  }
}

export default Link;
