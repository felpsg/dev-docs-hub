import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts'; 
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import TutorialPage from './Tutorial/TutorialPage';

function App() {
  return (
    <div className="content-container">
      <Router>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <div className="col-md-9">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/tutorial" element={<TutorialPage />} />
                <Route path="/tutorial/step1" element={<TutorialPage step={1} />} />
                <Route path="/tutorial/step2" element={<TutorialPage step={2} />} />
                <Route path="/tutorial/step3" element={<TutorialPage step={3} />} />
                <Route path="/tutorial/step4" element={<TutorialPage step={4} />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
