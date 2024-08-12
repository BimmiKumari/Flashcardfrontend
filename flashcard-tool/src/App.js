
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import Dashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to="/">Flashcards</Link>
            <Link to="/dashboard">Dashboard</Link>
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
