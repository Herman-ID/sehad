<<<<<<< HEAD
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
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
>>>>>>> 4e1880853c872d046f03ebeca691aed80b057a44
