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
                {/* Tutorial JavaScript inicio */}
                <Route
                  path="/tutorial/step1"
                  element={<TutorialPage tutorialType="javascript" />}
                />
                <Route
                  path="/tutorial/step2"
                  element={<TutorialPage tutorialType="javascript" />}
                />
                <Route
                  path="/tutorial/step3"
                  element={<TutorialPage tutorialType="javascript" />}
                />
                <Route
                  path="/tutorial/step4"
                  element={<TutorialPage tutorialType="javascript" />}
                />

                {/* Tutorial React inicio */}
                <Route
                  path="/tutorial/react/step1"
                  element={<TutorialPage tutorialType="react" />}
                />
                <Route
                  path="/tutorial/react/step2"
                  element={<TutorialPage tutorialType="react" />}
                />
                <Route
                  path="/tutorial/react/step3"
                  element={<TutorialPage tutorialType="react" />}
                />
                {/* ... Outras rotas de tutorial */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
