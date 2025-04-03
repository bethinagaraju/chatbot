import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { TranscriptProvider } from './transcriptcontext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TranscriptProvider>
    <App />
    </TranscriptProvider>
  </React.StrictMode>
)