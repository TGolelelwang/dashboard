import React from 'react'
import './App.css';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div>
            <Dashboard/>
        </div>
    </Router>
  );
}

export default App;
