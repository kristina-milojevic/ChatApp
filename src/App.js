import React from "react";
import './App.css';
import ChatBody from "./components/chatBody/ChatBody";
import Nav from "./components/nav/Nav";

function App() {
  return (
     <div className="_main">
       <Nav />
       <ChatBody />
    </div>
  );
}

export default App;