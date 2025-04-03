import React from 'react';
import { useState } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { signIn } from '../auth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { TranscriptContext } from '../transcriptcontext';
import './signin.css';


function Signin (){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { userName, setUserName } = useContext(TranscriptContext);
    const { checkUser, setCheckUser } = useContext(TranscriptContext);

    const login = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signIn(email, password);
            if(userCredential) {
                // navigate('/home');
                console.log(userCredential.user.displayName);
                setUserName(userCredential.user.displayName);
                setCheckUser(true);
                console.log(userName+"from signin");
                 navigate('/home');
            }

        } catch (error) {
            console.log(error);
        }
    }

  return (
        <div style={{height: '100vh'}} className='d-flex justify-content-center align-items-center bg-light'>
            <div className="signup-container p-4 d-flex flex-column justify-content-center align-items-center border border-black w-50">
                <h2>Login</h2>
                <Form className="w-50">
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="formPassword" className="my-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button onClick={login} variant="primary" type="submit" className="mt-3">
                            Login
                        </Button>
                    </div>
                </Form>
                <br />
                <p>Don't have an account? <a href="#" onClick={() => navigate('/')}>Sign Up</a></p>
            </div>
        </div>
  );
};

export default Signin;
