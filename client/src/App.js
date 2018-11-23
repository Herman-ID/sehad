import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/main.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/content/home";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);
export default App;
