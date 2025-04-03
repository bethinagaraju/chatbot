import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { TranscriptContext } from './transcriptcontext';

const TextToSpeechComponent = () => {
  const [text, setText] = useState('');

    const { bottext, setBottext } = useContext(TranscriptContext);

    const { voicechat, setVoicechat } = useContext(TranscriptContext);

    

  // Function to handle text-to-speech conversion
  
  useEffect(() => {
    
if(voicechat){
  window.speechSynthesis.cancel();
    if (bottext ) {
      const utterance = new SpeechSynthesisUtterance(bottext);
      window.speechSynthesis.speak(utterance);
    } else {
      console.log('Please enter some text.');
    }
    console.log('useefccet calling'+bottext);
}
else{
  window.speechSynthesis.cancel();
}

  }, [bottext, voicechat]);


  useEffect(() => {
    console.log('useefccet calling from text'+voicechat);
  }, [voicechat]);  

 



  return (
    // <div>
    //   <h2>Text to Speech Example</h2>
    //   <input
    //     type="text"
    //     value={text}
    //     onChange={(e) => setBottext(e.target.value)}
    //     placeholder="Enter text to speak"
    //   />
    //   <button> Convert to Speech</button>
    // </div>
    <></>
  );
};

export default TextToSpeechComponent;


