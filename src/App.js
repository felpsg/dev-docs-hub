import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts'; // Corrigido o nome do arquivo
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import TutorialPage from './Tutorial/TutorialPage';

import JavaScriptStep1 from './Tutorial/JavaScript/Step1';
import JavaScriptStep2 from './Tutorial/JavaScript/Step2';
import JavaScriptStep3 from './Tutorial/JavaScript/Step3';
import JavaScriptStep4 from './Tutorial/JavaScript/Step4';

import ReactStep1 from './Tutorial/React/Step1';
import ReactStep2 from './Tutorial/React/Step2';
import ReactStep3 from './Tutorial/React/Step3';

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
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/tutorial" element={<TutorialPage />} />
                <Route
                  path="/tutorial/javascript/*"
                  element={<TutorialPage tutorialType="javascript" />}
                >
                  <Route path="step1" element={<JavaScriptStep1 />} />
                  <Route path="step2" element={<JavaScriptStep2 />} />
                  <Route path="step3" element={<JavaScriptStep3 />} />
                  <Route path="step4" element={<JavaScriptStep4 />} />
                </Route>
                <Route
                  path="/tutorial/react/*"
                  element={<TutorialPage tutorialType="react" />}
                >
                  <Route path="step1" element={<ReactStep1 />} />
                  <Route path="step2" element={<ReactStep2 />} />
                  <Route path="step3" element={<ReactStep3 />} />
                </Route>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
