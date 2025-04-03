import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { TranscriptContext } from './transcriptcontext';
import { BsMic, BsMicFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const SpeechToText = () => {
  // const [isListening, setIsListening] = useState(false);
  const { isListening, setIsListening } = useContext(TranscriptContext);
  const { transcript, setTranscript } = useContext(TranscriptContext);
  const [errorMessage, setErrorMessage] = useState('');
  const recognitionRef = useRef(null);
  const { Miccontrol, setMiccontrol } = useContext(TranscriptContext);

  const {isMicOn, setIsMicOn} = useContext(TranscriptContext);

  useEffect(() => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setErrorMessage('Speech Recognition API is not supported in this browser.');
      return;
    }

    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event) => {
      const currentTranscript = event.results[event.resultIndex][0].transcript;
      setTranscript(currentTranscript);
    };

    recognitionRef.current.onerror = (event) => {
      setErrorMessage(`Error: ${event.error}`);
    };

    recognitionRef.current.onend = () => {
      if (isListening) {
        recognitionRef.current.start();
      }
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening((prevState) => !prevState);
    setIsMicOn((prevState) => !prevState);
  };

  useEffect(() => {
    recognitionRef.current.stop();
   
  }, [Miccontrol]);

  return (
    <div>
      <Button variant="outline-primary" onClick={toggleListening}>
        {isMicOn ? <BsMicFill /> : <BsMic />}
      </Button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SpeechToText;

