import React, { useState } from 'react';
import './ToggleSwitch.css'; 
import { useContext } from 'react';
import { TranscriptContext } from '../transcriptcontext';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [flag, setFlag] = useState(true);

  const { setVoicechat, voicechat } = useContext(TranscriptContext);


  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
    setVoicechat(flag);
    setFlag(!flag);
    console.log('useefccet calling'+isChecked);
    console.log('useefccet calling from voicechat'+voicechat);

  };

  return (
    <label className="switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleSwitch;
