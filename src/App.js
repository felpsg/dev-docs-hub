import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import TutorialPage from './Tutorial/TutorialPage';
import Step2 from './Tutorial/Step2';
import Step1 from './Tutorial/Step1';
import './App.css';

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
                <Route path="/Tutorial/step1" element={<Step1 />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/tutorial" element={<TutorialPage />} />
                <Route path="/tutorial/step2" element={<Step2 />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
