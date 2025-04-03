import React, { createContext, useState } from 'react';


const ChatbotContext = createContext();


const MyProvider = (props) => {

  const [voicetext, setVoicetext] = useState('');

  return (
    <ChatbotContext.Provider value={{ voicetext, setVoicetext }}>
      {props.children}
    </ChatbotContext.Provider>
  );
};


export { ChatbotContext, MyProvider };
