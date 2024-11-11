// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EventPage from './pages/EventPage';
import AboutPage from './pages/AboutPage';
import Community from './pages/Community';
import RedeemPage from './pages/RedeemPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/redeem" element={<RedeemPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;