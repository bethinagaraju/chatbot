import React, { useState } from 'react';
import Header from '../components/Header';
import ChatWindow from '../components/ChatWindow';
import InputArea from '../components/InputArea';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TranscriptContext } from '../transcriptcontext';

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
const [selectedPersonality, setSelectedPersonality] = useState('friendly');
const [isVoiceActive, setIsVoiceActive] = useState(false); 

const { checkUser } = useContext(TranscriptContext);
const navigate = useNavigate();

const handleSendMessage = (message) => {
    console.log(message);

  };

  // useEffect(() => {
  //   if(!checkUser){
  //     navigate('/signin');
  //   }
  // }, [checkUser, navigate]);

  return (

    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
       
        <Header 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          selectedPersonality={selectedPersonality}
          setSelectedPersonality={setSelectedPersonality}
        />
        <ChatWindow 
          typeOfChat={selectedPersonality} 
          isDarkMode={isDarkMode} 
        />
     
      </div>
    </div>
  );
}

export default Home;
