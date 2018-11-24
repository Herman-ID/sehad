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
      menu: true
    };
    this.OnMenuClick = this.OnMenuClick.bind(this);
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
          <Home menu={this.state.menu} />
        </div>
      </Router>
    );
  }
}
export default App;
