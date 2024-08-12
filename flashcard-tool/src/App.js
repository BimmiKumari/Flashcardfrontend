
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import Dashboard from './components/AdminDashboard';
import './App.css'
function App() {
  return (
    <Router>
      <div>
        <header>
         <h2 className="glowing-text"> FLASHCARD LEARNING TOOL</h2>
          <nav className='navbar'>
            <Link to="/" style={{color:'white'}}>Flashcards</Link>
            <Link to="/dashboard" style={{color:'white'}}>Dashboard</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<FlashcardList />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
