import React, { Component } from "react";

class Sosmed extends Component {
  constructor(props) {
    super(props);
    this.style = {
      height: this.props.height,
      width: this.props.width
    };
  }

  render() {
    return (
      <div id="share">

        <a className="facebook" href={`https://www.facebook.com/share.php?u=http://localhost:3000?` + this.props.type + `=` + this.props.nama} target="blank"><i className="fab fa-facebook-f"></i></a>
        <a className="twitter" href={`https://twitter.com/intent/tweet?status=` + this.props.nama + `+` + `http://localhost:3000?` + this.props.type + `=` + this.props.nama} target="blank"><i className="fab fa-twitter"></i></a>
        <a className="googleplus" href={`https://plus.google.com/share?url=http://localhost:3000?` + this.props.type + `=` + this.props.nama} target="blank"><i className="fab fa-google-plus-g"></i></a>

      </div>
    );
  }
}

export default Sosmed;
