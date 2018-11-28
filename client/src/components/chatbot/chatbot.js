import React, { Component } from "react";
import Pusher from "pusher-js";
import "../../asset/chat.css";
import "../../asset/jquery.convform.min.css";

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: "",
      conversation: []
    };
    this.style = {
      overflow: "hidden",
      overflowWrap: "break-word",
      resize: "none",
      height: "32px"
    };
  }

  componentDidMount() {
    const pusher = new Pusher("82e3a3134057d11e5762", {
      cluster: "eu",
      encrypted: true
    });

    const channel = pusher.subscribe("bot");
    channel.bind(localStorage.getItem('channel_id'), (data)=>{
      try {
        var item = {};
        item = JSON.parse(data.message);
        var message = "";
        if(item.status == true){
          console.log(item.type);
          if(item.type === "tumbuhan"){
            var image = `<img src='${item.data.image}' width="100%">`;
            message = image+item.data.summary;
            console.log("tumbuhan");
          }
          if(item.type === "manfaat"){
            message = item.data.summary;
            console.log("manfaat");
          }
          if(item.type === "penyakit"){
            message = item.data.obat;
            console.log("penyakit");
          }
        }else{
          message = item.message;
          console.log("else");
        }
        const msg = {
          text: message,
          user: "ai"
        };
        this.setState({
          conversation: [...this.state.conversation, msg]
        });
        this.props.onDataComing(data);
      } catch (error) {
        console.log(error);
      }
    });
  }

  handleChange = event => {
    this.setState({ userMessage: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.userMessage.trim()) return;

    const msg = {
      text: this.state.userMessage,
      user: "human"
    };

    this.setState({
      conversation: [...this.state.conversation, msg]
    });

    fetch("http://localhost:5000/api/v1/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: this.state.userMessage,
        channel_id:localStorage.getItem('channel_id')
      })
    });

    this.setState({ userMessage: "" });
  };

  render() {
    const ChatBubble = (text, i, className) => {
      return (
        <div key={`${className}-${i}`} className={`${className} chat-bubble`}>
          <span className="chat-content"dangerouslySetInnerHTML={{__html: text}}></span>
        </div>
      );
    };

    const chat = this.state.conversation.map((e, index) =>
      ChatBubble(e.text, index, e.user)
    );

    return (
      <div className="chat-window col-3">
        <div className="conversation-view">{chat}</div>
        <div className="message-box">
          <form
            id="convForm"
            className="convFormDynamic"
            onSubmit={this.handleSubmit}
          >
            <input
              value={this.state.userMessage}
              onInput={this.handleChange}
              id="userInput"
              rows="1"
              placeholder="Type Here"
              className="userInputDynamic"
              style={this.style}
              autoFocus
            />
            <button type="submit" className="submit">
              ▶
            </button>
            <span className="clear" />
          </form>
        </div>
        </div>
    );
  }
}

export default Chatbot;