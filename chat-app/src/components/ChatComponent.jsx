import React, { useState, useEffect } from "react";
import "./chat.css";

const ChatComponent = ({ clientId }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [websckt, setWebsckt] = useState(null);

  useEffect(() => {
    // const url = `ws://localhost:8000/ws/${clientId}`;

    //     const backendUrl =
    //   window.location.hostname === "localhost"
    //     ? `ws://localhost:8000/ws/${clientId}`
    //     : `wss://fastchat-q0dc.onrender.com/ws/${clientId}`;

    // const ws = new WebSocket(backendUrl);

    const url = `wss://fastchat-q0dc.onrender.com/ws/${clientId}`;
    const ws = new WebSocket(url);

    ws.onopen = () => {
      ws.send("Connect");
    };

    ws.onmessage = (e) => {
      const receivedMessage = JSON.parse(e.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    setWebsckt(ws);

    return () => ws.close();
  }, [clientId]);

  const sendMessage = () => {
    if (websckt && message.trim() !== "") {
      websckt.send(JSON.stringify({ clientId, message }));
      setMessage("");
    }
  };

  return (
    <div className="container">
      <h1>Chat</h1>
      <h2>Your client id: {clientId}</h2>
      <div className="chat-container">
        <div className="chat">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.clientId === clientId
                  ? "my-message-container"
                  : "another-message-container"
              }
            >
              <div
                className={
                  msg.clientId === clientId ? "my-message" : "another-message"
                }
              >
                <p className="client">client id : {msg.clientId}</p>
                <p className="message">
                  {(() => {
                    try {
                      const parsedMessage = JSON.parse(msg.message);
                      return parsedMessage.message; // Extract only the actual message
                    } catch (error) {
                      console.log(error);
                      return msg.message; // Fallback in case parsing fails
                    }
                  })()}
                </p>
                <p className="message-time">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="input-chat-container">
          <input
            className="input-chat"
            type="text"
            placeholder="Chat message ..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />
          <button className="submit-chat" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
