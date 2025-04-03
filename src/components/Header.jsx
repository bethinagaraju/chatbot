import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { BsSun, BsMoon } from 'react-icons/bs';
import ToggleButton from './toggleSwithc';

function Header({ isDarkMode, setIsDarkMode, selectedPersonality, setSelectedPersonality }) {
  const personalities = [
    { id: 'friendly', name: 'Friendly' },
    { id: 'professional', name: 'Professional' },
    { id: 'casual', name: 'Casual' },
  ];

  return (
    <Row className="align-items-center justify-content-between mb-3">
      <Col xs="auto">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>AI Chatbot</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ToggleButton /><span style={{color: isDarkMode ? 'white' : 'black'}}>Voice chat</span>
        </div>
      </Col>
      <Col xs="auto">
        <div className="flex justify-between items-center">
          <Form.Select
            value={selectedPersonality}
            onChange={(e) => setSelectedPersonality(e.target.value)}
            className="me-2"
          >
            {personalities.map((personality) => (
              <option key={personality.id} value={personality.id}>
                {personality.name}
              </option>
            ))}
          </Form.Select>
          <Button
            variant={isDarkMode ? 'primary' : 'outline-secondary'}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <BsMoon size={16} /> : <BsSun size={16} />}
          </Button>
        </div>
      </Col>
    </Row>
  );
}

export default Header;

