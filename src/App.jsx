import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom';
import Home from './components/hero/Home';
import './index.css';



const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App