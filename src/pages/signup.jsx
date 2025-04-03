import React from 'react';
import { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { signUp } from '../auth';
import { useNavigate } from 'react-router-dom';

function SignupUI() {

  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
    const addUser = (e) => {
      e.preventDefault();
      console.log("add user");
    

      if(signUp(email,password,displayName)){
        alert("User created successfully!");
        navigate('/signin');
      }
      
    }


  return (
    <div style={{height: '100vh'}} className='d-flex justify-content-center align-items-center bg-light'>
    <div className="signup-container p-4 d-flex flex-column justify-content-center align-items-center border border-black w-50">
      <h2>Create an account</h2>
      <Form className="w-50">
      <Form.Group controlId="formDisplayName">
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your display name" onChange={(e) => setDisplayName(e.target.value)}/>
        </Form.Group>
    
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" 
          onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
       
        <Form.Group controlId="formPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>


        <div className="d-flex justify-content-center">
          <Button onClick={addUser} variant="primary" type="submit" className="mt-3">
            Sign Up
          </Button>
        </div>
      </Form>
      <br></br>
      <p>Already have an account? <a href="#" onClick={() => navigate('/signin')}>Login</a></p>
    </div>
    </div>
  );
}

export default SignupUI;

