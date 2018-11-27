import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/main.css";
import Navbar from "./components/navbar/navbar";
import LeftBar from "./components/leftbar/leftbar";
import RightBar from "./components/rightbar/rightbar";
import Home from "./components/content/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      menu: false
    };
    this.OnMenuClick = this.OnMenuClick.bind(this);
    
    if(localStorage.getItem('channel_id') === null){
      localStorage.setItem("channel_id",randHex(10))
    }
  }
  OnMenuClick() {
    this.setState({ menu: !this.state.menu });
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar menu={this.state.menu} OnMenuClick={this.OnMenuClick} />
          <LeftBar />
          <RightBar />
          <div className="dec_i" />
          <Home menu={this.state.menu} />
        </div>
      </Router>
    );
  }
}
var randHex = function(len) {
  var maxlen = 8;
  var min = Math.pow(16,Math.min(len,maxlen)-1) ;
  var max = Math.pow(16,Math.min(len,maxlen)) - 1;
  var n   = Math.floor( Math.random() * (max-min+1) ) + min;
  var r   = n.toString(16);
  while ( r.length < len ) {
     r = r + randHex( len - maxlen );
  }
  return r;
};

// var random = sessionStorage.getItem('chanel_id');
export default App;
