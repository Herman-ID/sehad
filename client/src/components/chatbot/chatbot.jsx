import React, { Component } from "react";
import Pusher from "pusher-js";
import "../../asset/chat.css";
import "../../asset/jquery.convform.min.css";
import ReactDOM from "react-dom";

class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessage: "",
      conversation: [],
      selesai: false
    };
    this.style = {
      overflow: "hidden",
      overflowWrap: "break-word",
      resize: "none",
      height: "32px"
    };
  }

  componentDidUpdate() {
    var node = ReactDOM.findDOMNode(this.refs.con);
    node.scrollTop = node.scrollHeight;
  }

  componentDidMount() {
    var msg = "";

    const pusher = new Pusher("82e3a3134057d11e5762", {
      cluster: "eu",
      encrypted: true
    });

    const channel = pusher.subscribe("bot");
    channel.bind(localStorage.getItem("channel_id"), data => {
      const doto = JSON.parse(data.message);
      console.log(doto);
      if (doto.status === true) {
        if (doto.type === "tumbuhan" || doto.type === "manfaat") {
          msg = {
            image: doto.data.image,
            text: doto.data.summary.substring(0, 60) + "...",
            user: "ai",
            type: doto.type
          };
        }
        this.props.onDataComing(doto);
      } else {
        msg = {
          text: doto.message,
          user: "ai"
        };
      }
      this.setState({
        conversation: [...this.state.conversation, msg]
      });
    });
    if (this.state.conversation.length === 0) {
      msg = [
        {
          text:
            "Hai!!! Saya sehad\n Silahkan tanyakan pada saya tentang herbal",
          user: "ai"
        },
        {
          text: 'Coba lah mulai dengan "apa itu kumis kucing?"',
          user: "ai"
        }
      ];
      this.setState({
        conversation: msg
      });
    }
    if (this.state.selesai === false) {
      var url_string = window.location.href;
      var url = new URL(url_string);
      var c = url.searchParams.get("tumbuhan");
      var d = url.searchParams.get("manfaat");
      if (c !== null || d !== null) {
        var msg = {
          text: "",
          user: "human"
        };
        if (c !== null) {
          msg.text = "apa itu " + c + "?";
        } else if (d != null) {
          msg.text = "manfaat dari " + d;
        }
        this.setState({
          conversation: [...this.state.conversation, msg],
          selesai: true
        });
        console.log(this.state.conversation);
        fetch("http://localhost:5000/api/v1/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: msg.text,
            channel_id: localStorage.getItem("channel_id")
          })
        });
      }
    }
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
          key={`${data.user}-${index}`}
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
      e.type === "tumbuhan" || e.type === "manfaat" ? TumbuhanBubble(e, index) : ChatBubble(e, index)
    );

    return (
      <div className="chat-window col-4">
        <div className="conversation-view" id="botconvers" ref="con">
          {chat}
        </div>
        <div className="message-box">
          <form
            id="convForm"
            className="convFormDynamic"
            onSubmit={this.handleSubmit}
          >
            <input
              value={this.state.userMessage}
              onChange={this.handleChange}
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
