// TranscriptContext.js

import { createContext, useState } from 'react';
import React from 'react';


// Create a Context
export const TranscriptContext = createContext();

// Create a Provider component
export const TranscriptProvider = (props) => {
  const [transcript, setTranscript] = useState('');
  const [bottext, setBottext] = useState('');
  const [voicechat, setVoicechat] = useState(false);
  const [ userName, setUserName ] = useState('raj');
  const [ checkUser, setCheckUser ] = useState(false);
  const [ singlebottext, setSinglebottext ] = useState('');
  const [isMicOn, setIsMicOn] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [Miccontrol, setMiccontrol] = useState(true);

  return (
    <TranscriptContext.Provider value={{Miccontrol, setMiccontrol, isListening, setIsListening, isMicOn, setIsMicOn, transcript, setTranscript, bottext, setBottext, voicechat, setVoicechat, userName, setUserName, checkUser, setCheckUser, singlebottext, setSinglebottext}}>
      {props.children}
    </TranscriptContext.Provider>
  );
};

