import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BrowseTutors from './pages/BrowseTutors';
import Dasshboard from './pages/Dashboard';
import Payment from './pages/payement';

import './index.css';

const App = () => {
  return (
    
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/tutors" element={<BrowseTutors />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>
        </div>
      </Router>
    
  );
};

export default App;
