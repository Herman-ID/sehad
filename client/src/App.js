import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';
import './asset/bootstrap/css/bootstrap.css';
import './asset/main.css';
import './asset/chatbot/jquery.convform.css';
import Tumbuhan from './components/tumbuhan';
import Navbar from './components/navbar/navbar';
import Chatbot from './components/chatbot/chatbot';
import Home from './components/content/home';

const App = () => (
  <Router>
    <div>
    <script
      src="https://code.jquery.com/jquery-1.12.3.min.js"
      integrity="sha256-aaODHAgvwQW1bFOGXMeX+pC4PZIPsvn2h1sArYOhgXQ="
      crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/autosize@4.0.2/dist/autosize.min.js"></script>
      <script src="https://eduardotkoller.github.io/convForm/dist/jquery.convform.js"></script>
      <Navbar />
      <div class="sehad__container row">
        <Route exact path="/" component={Home} />
        <Route path="/tumbuhan" component={Tumbuhan} />
        <Chatbot />
      </div>
    </div>
  </Router>
);
export default App;