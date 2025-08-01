import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import Leadership from './components/Leadership';
import Resources from './components/Resources';
import GetInvolved from './components/GetInvolved';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Header />
              <Hero />
              <Problem />
              <Solution />
              <Services />
              <Leadership />
              <Resources />
              <GetInvolved />
              <Events />
              <Contact />
              <Footer />
            </motion.div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;