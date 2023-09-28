import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary.jsx'



const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
     <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Router>
)
