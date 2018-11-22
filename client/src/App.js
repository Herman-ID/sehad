import React, { Component } from "react";
import "./asset/index.css";
import Navbar from "./components/navbar/navbar";
import Chatbot from "./components/chatbot/chatbot";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Chatbot />
      </div>
    );
  }
}

export default App;
