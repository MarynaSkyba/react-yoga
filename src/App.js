import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
  {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <Router>
        <HomePage />
      
    </Router>
    {/* <Footer /> */}
    </div>
  );
}

export default App;
