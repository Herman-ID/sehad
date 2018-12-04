import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/main.css";
import Navbar from "./components/navbar/navbar";
import LeftBar from "./components/leftbar/leftbar";
import Home from "./components/content/home";
import Leaflet from 'leaflet';
import Guide from './components/guide/guide';
Leaflet.Icon.Default.imagePath =
  '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      menu: false,
      isguide: true
    };
    this.OnMenuClick = this.OnMenuClick.bind(this);
    this.onGuide = this.onGuide.bind(this);

    if (localStorage.getItem("channel_id") === null) {
      localStorage.setItem("channel_id", randHex(10));
    }

  }
  componentDidMount() {
    if (localStorage.getItem("isfirst") !== null) {
      this.setState({
        isguide: false
      })
    }
  }
  OnMenuClick() {
    this.setState({ menu: !this.state.menu });
  }
  onGuide() {
    console.log("masuk");
    if (localStorage.getItem("isfirst") === null) {
      this.setState({
        isguide: false
      })
      localStorage.setItem("isfirst", false);
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar menu={this.state.menu} OnMenuClick={this.OnMenuClick} />
          <LeftBar />
          {
            this.state.isguide === true ?
              <Guide onGuide={this.onGuide} />
              : null
          }
          <div className="dec_i" />
          <Home menu={this.state.menu} OnMenuClick={this.OnMenuClick} />
        </div>
      </Router>
    );
  }
}

// get channel id

var randHex = function (len) {
  var maxlen = 8;
  var min = Math.pow(16, Math.min(len, maxlen) - 1);
  var max = Math.pow(16, Math.min(len, maxlen)) - 1;
  var n = Math.floor(Math.random() * (max - min + 1)) + min;
  var r = n.toString(16);
  while (r.length < len) {
    r = r + randHex(len - maxlen);
  }
  return r;
};

export default App;