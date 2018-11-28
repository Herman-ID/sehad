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
    channel.bind(localStorage.getItem("channel_id"), data => {
      const doto = JSON.parse(data.message);
      var msg = "";
      if (doto.type === "tumbuhan") {
        msg = {
          image: doto.data.image,
          text: doto.data.content.substring(0, 60) + "...",
          user: "ai",
          type: doto.type
        };
        this.props.onDataComing(doto);
        console.log(doto);
      } else {
        msg = {
          text: doto.data,
          user: "ai",
          type: doto.type
        };
      }
      this.setState({
        conversation: [...this.state.conversation, msg]
      });
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
        channel_id: localStorage.getItem("channel_id")
      })
    });

    this.setState({ userMessage: "" });
  };

  render() {
    const TumbuhanBubble = (data, index) => {
      return (
        <div
          key={`${data.user}-${data.index}`}
          className={`${data.user} chat-bubble img-bubble`}
        >
          <img src={data.image} alt={data.text} />
          <p className="chat-content">{data.text}</p>
        </div>
      );
    };
    const ChatBubble = (data, index) => {
      return (
        <div
          key={`${data.user}-${index}`}
          className={`${data.user} chat-bubble`}
        >
          <span
            className="chat-content"
            dangerouslySetInnerHTML={{ __html: data.text }}
          />
        </div>
      );
    };

    const chat = this.state.conversation.map((e, index) =>
      e.type === "tumbuhan" ? TumbuhanBubble(e, index) : ChatBubble(e, index)
    );

    return (
      <div className="chat-window col-4">
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