import React, { useState } from 'react';
import SpeechToText from './speechtotext';
import Home from './pages/home';
import TextToSpeech from  './texttospeech';
import  SignupPage from './pages/signup';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signin from './pages/signin';

// import { MyProvider } from './chatbotcontext'; // Import the MyProvider

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<SignupPage />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
      
      {/* <MyProvider> */}
        <TextToSpeech />
      {/* </MyProvider> */}
    </div>
  );
}

export default App;

