import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom"
import ShoppingCartProvider from './context/ShoppingCartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
    <Router>
    <App />
    </Router>
    </ShoppingCartProvider>
  </React.StrictMode>,
)
