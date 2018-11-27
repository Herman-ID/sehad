import React, { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about_sehad">
        <h1 className="title_about">See Herbal Around</h1>
        <div className="title_about__x" />
        <div className="title_about__y" />
        <h2 className="subtitle_about">Temukan obat herbal disekitarmu</h2>
      </div>
    );
  }
}

export default About;
