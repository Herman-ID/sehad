import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./asset/bootstrap/css/bootstrap.css";
import "./asset/main.css";
import "./asset/chatbot/jquery.convform.css";
import Tumbuhan from "./components/tumbuhan";
import Navbar from "./components/navbar/navbar";
import Chatbot from "./components/chatbot/chatbot";
import Home from "./components/content/home";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div class="sehad__container row">
        {/* <Route exact path="/" component={Chatbot} /> */}
        <Route path="/tumbuhan" component={Tumbuhan} />
        <Chatbot />
      </div>
    </div>
  </Router>
);
export default App;
