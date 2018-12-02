import React, { Component } from "react";
class MiniGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="col-3 gallery-temp">
                <a href={`http://localhost:3000?` + this.props.type + `=` + this.props.content.result.nama}>
                    <p className="gallery-no">{this.props.i > 8 ? (this.props.i + 1) : "0" + (this.props.i + 1)}</p>
                    <h1 className="gallery-title">{this.props.content.result.nama}</h1>
                    <p className="gallery-subtitle">{this.props.content.summary.substring(0, 150) + "..."}</p>
                </a>
            </div>
        );
    }
}
export default MiniGallery;
