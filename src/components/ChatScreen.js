import React from "react";
import Message from "./Message";
import MessageForm from "./MessageForm";
import TypingIndicator from "./TypingIndicator";

function ChatScreen() {
  return (
    <div>
      <MessageForm />
      <TypingIndicator />
      <Message />
    </div>
  );
}

export default ChatScreen;
