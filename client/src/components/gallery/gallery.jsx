import React, { Component } from "react";
import MainGallery from "./maingallery";
import MiniGallery from "./minigallery";
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      now: 0,
      type: "tumbuhan"
    }
    this.maju = this.maju.bind(this);
    this.mundur = this.mundur.bind(this);
  }
  componentDidMount() {

    fetch("http://localhost:5000/api/v1/tumbuhan", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(result => result.json())
      .then(datas =>
        this.setState({
          data: datas
        }))
  }
  maju() {
    this.setState({ now: this.state.now + 1 });
  }

  mundur() {
    this.setState({ now: this.state.now - 1 })
  }
  render() {
    return (
      <div className="gallery">
        <div className="row gallery-list">
          {
            this.state.data.length !== 0 ? (
              this.state.data.map((m, index) => (
                index >= (this.state.now + 1) && index <= (this.state.now + 4) ?
                  (<MiniGallery type={this.state.type} content={m} i={index} />) : null
              ))
            ) : ""
          }
        </div>
        <div className="gallery-main row">
          <div className="gmain-btn">
            {
              ((this.state.now + 1) !== this.state.data.length) ? (
                <button className="gmain-btn-2" onClick={this.maju}>
                  {this.state.now > 7 ? (this.state.now + 2) : "0" + (this.state.now + 2)}
                  <br />
                  <i className="fas fa-caret-right" />
                </button>
              ) : null}
            <h1 className="gmain-now">{this.state.now > 8 ? (this.state.now + 1) : "0" + (this.state.now + 1)}</h1>
            {
              this.state.now > 0 ? (
                <button className="gmain-btn-1" onClick={this.mundur}>
                  {this.state.now > 9 ? (this.state.now) : "0" + (this.state.now)}
                  <br />
                  <i className="fas fa-caret-left" />
                </button>
              ) : null
            }
          </div>
          <MainGallery content={
            this.state.data.length !== 0 ? (
              this.state.data[this.state.now]
            ) : false} click={this.props.setTumbuhan} type={this.state.type}/>
        </div>
      </div >
    );
  }
}
export default Gallery;
