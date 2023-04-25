import React, { useState } from "react";
import ChatMessages from "./components/ChatMessages";
import MessageForm from "./components/MessageForm";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (text) => {
    setMessages([...messages, { type: "user", text }]);
  };

  return (
    <div className="app">
      <ChatMessages messages={messages} />
      <MessageForm onSubmit={handleUserMessage} />
    </div>
  );
}

export default App;
