import React from "react";

function Message({ messages }) {
  return (
    <div className="chat-window">
      {/* {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            // if message type is user, then use user-message class, else use bot-message class
            message.type === "user" ? "user-message" : "bot-message"
          }`}
        >
          <div className="message-bubble">{message.text}</div>{" "}
        
        </div>
      ))} */}
    </div>
  );
}

export default Message;
