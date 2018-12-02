import { BrowserRouter as Router, Route } from "react-router-dom";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/main.css";
import Navbar from "./components/navbar/navbar";
import LeftBar from "./components/leftbar/leftbar";
import Home from "./components/content/home";


import Leaflet from 'leaflet'
import Pemetaan from "./components/maps/pemetaan";

Leaflet.Icon.Default.imagePath =
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/'

import SiteMap from "./components/sitemap/sitemap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      menu: false
    };
    this.OnMenuClick = this.OnMenuClick.bind(this);

    if (localStorage.getItem("channel_id") === null) {
      localStorage.setItem("channel_id", randHex(10));
    }
  }

  OnMenuClick() {
    this.setState({ menu: !this.state.menu });
  }
  render() {
    return (
      <Router>
          <div>
            <scripload />
            <Navbar menu={this.state.menu} OnMenuClick={this.OnMenuClick} />
            <LeftBar />
            <div className="dec_i" />
            <Home menu={this.state.menu} />
          </div>
        <div>
          <Navbar menu={this.state.menu} OnMenuClick={this.OnMenuClick} />
          <LeftBar />
          <div className="dec_i" />
          <Home menu={this.state.menu} OnMenuClick={this.OnMenuClick} />
          <SiteMap />
        </div>
      </Router>
    );
  }
}

// get channel id

var randHex = function(len) {
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
