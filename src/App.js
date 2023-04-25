import React from "react";
import { useState, useEffect} from "react";
import ChatScreen from "./components/ChatScreen";
import MessageHistory from "./components/MessageHistory";
import MessageForm from "./components/MessageForm";
// import callOpenAiAPI from "./services/openai-api";
 import { Configuration, OpenAIApi } from "openai";

function App() {

const configuration = new Configuration({
    // organization: "org-gqc2Ac10nQFu5jcqNNSd3Slm",
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});
  
  useEffect(() => {
    const openai = new OpenAIApi(configuration);
    const setData = async() => {
      const response = await openai.listModels(); 
      console.log(response.json)
    }
    setData()
  },[]
    
  )
  
  
  

 
  
  
  
  
  return (
    <div>
      {/* <h1>Chat App</h1>
      <ChatScreen />
      <MessageHistory />
      <MessageForm></MessageForm> */}
    </div>
  );
}

export default App;
