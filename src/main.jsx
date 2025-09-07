import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/anglee-portfolio">
       <App />
    </BrowserRouter>
)


