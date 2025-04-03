import React, { useState, useEffect, useContext } from 'react';
import { BsSend, BsMic, BsMicFill } from 'react-icons/bs';
import { Button, Form, InputGroup } from 'react-bootstrap';
import SpeechToText from '../speechtotext';
import { TranscriptContext } from '../transcriptcontext';

function InputArea({ onSendMessage, isVoiceActive, setIsVoiceActive, isDarkMode }) {
  const { transcript, setTranscript } = useContext(TranscriptContext);
  const [message, setMessage] = useState('');
  const {isMicOn, setIsMicOn} = useContext(TranscriptContext);
  const {isListening, setIsListening} = useContext(TranscriptContext);
  const {Miccontrol, setMiccontrol} = useContext(TranscriptContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(message);
    setMessage('');
    setTranscript('');
    handleInputMic();
  };

  const toggleVoiceInput = () => {
    setIsVoiceActive(!isVoiceActive);
  };

  useEffect(() => {
    console.log(transcript + "200");
  }, [transcript]);

  const [micClicked, setMicClicked] = useState(true);
  function handlemic() {
    if (micClicked) {
      setMicClicked(false);
      console.log("on");
      setMessage(transcript);
    } else {
      setMicClicked(true);
      console.log("off");
      setMessage(transcript);
    }
  }

  function handleInputMic() {
    // console.log("clicked");
    // setMicClicked(false);
    setIsMicOn(false);
    setIsListening(false);
    setMiccontrol(!Miccontrol);
  }

  useEffect(() => {
    setMessage(transcript);
  }, [transcript]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text style={{ backgroundColor: 'transparent', border: 'none' }}>
          <Button variant="link" onClick={handlemic}>
            <SpeechToText />
          </Button>
        </InputGroup.Text>
        <Form.Control
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} // Dark mode styles
        />
        <Button  variant="outline-primary" type="submit" className="p-3 bg-transparent border-0" disabled={!message.trim()}>
          <BsSend size={20} />
        </Button>
      </InputGroup>
    </Form>
  );
}

export default InputArea;
