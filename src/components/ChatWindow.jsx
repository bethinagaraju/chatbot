import React, { useState, useRef, useEffect, useContext } from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';
import fetchAnswer from '../fetchanswer';
import { TranscriptContext } from '../transcriptcontext';
import { saveChatHistory, loadChatHistory } from '../localstorageutils';

function ChatWindow({ typeOfChat, isDarkMode }) {
  const { userName } = useContext(TranscriptContext);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `${userName}, how can I help you today?`,
      sender: 'bot',
    },
  ]);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const messagesEndRef = useRef(null);
  const [conversationHistory, setConversationHistory] = useState([]);
  
  const { bottext, setBottext } = useContext(TranscriptContext);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    let h = loadChatHistory();
    const response = await fetchAnswer(text, conversationHistory, typeOfChat);
    setMessages([...messages, {
      id: Date.now(),
      text,
      sender: 'user',
    }, {
      id: Date.now() + 1,
      text: response,
      sender: 'bot',
    }]);

    setConversationHistory((prevHistory) => [...prevHistory, {
      user: text,
      bot: response,
    }]);

    // saveChatHistory(conversationHistory);
    setBottext(response);
  };

  return (
    <div className={`chat-window-container ${isDarkMode ? 'dark' : ''}`}>
      <div className={`chat-window flex flex-col ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-lg shadow-lg h-[800px]`}>
        <div id='chat-header' className={`chat-header flex justify-between p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className="text-lg font-semibold">Chat Window</h2>
          <button
            onClick={() => setMessages([])}
            className="clear-chat-button"
          >
            Clear Chat
          </button>
        </div>

        <MessageList 
          messages={messages} 
          messagesEndRef={messagesEndRef} 
        />
        
        <InputArea 
          onSendMessage={handleSendMessage}
          isVoiceActive={isVoiceActive}
          setIsVoiceActive={setIsVoiceActive}
        />
      </div>
    </div>
  );
}

export default ChatWindow;

