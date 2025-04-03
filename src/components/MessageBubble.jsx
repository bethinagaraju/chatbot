import React, { useEffect } from 'react';
import { LuAlignHorizontalJustifyCenter, LuBot } from "react-icons/lu";
import { AiOutlineSound } from "react-icons/ai";
import { TranscriptContext } from '../transcriptcontext';
import { useContext, useState } from 'react';
import { VscUnmute } from "react-icons/vsc";
import { VscMute } from "react-icons/vsc";

function MessageBubble({ text, sender, isDarkMode }) {

  const { bottext, setBottext } = useContext(TranscriptContext);

  const formatText = (inputText) => {
    let formattedText = inputText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<li style="list-style-type: none;">$1</li>');
    return formattedText;
  };

  function handlespeaker() {
  
    const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    
  }

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: sender === 'user' ? 'flex-end' : 'flex-start',
        marginBottom: '10px',
        alignItems: 'center',
      }}
    >
      <div style={{ padding: '5px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        {sender === 'bot' && <LuBot style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', marginRight: '0px', fontSize: '30px', color: 'black' }} />}
      </div>
      <div
        className={`message-bubble ${isDarkMode ? 'dark-mode' : ''}`}
        style={{
          maxWidth: '80%',
          padding: '10px 15px',
          borderRadius: '20px',
          backgroundColor: sender === 'user' ? '#4CAF50' : '#e0e0e0',
          color: sender === 'user' ? 'white' : 'black',
          wordWrap: 'break-word',
          fontSize: '14px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: formatText(text.replace(/\n/g, '<br />')),
          }}
        />
        
      </div>
      <br/>
      <div>
          
          <VscUnmute onClick={() => handlespeaker()} style={{color: '#808080'}} />
        
      </div>
    </div>
    
  );
}

export default MessageBubble;

