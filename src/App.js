import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';
import Sidebar from './components/Sidebar';
import ReactDocs from './pages/JsDoc';
import JavaScriptDocs from './pages/ReactDoc';
import './App.css';
import Chat from './components/Chat';

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
                <Route path="/docs/react" element={<ReactDocs />} />
                <Route path="/docs/javascript" element={<JavaScriptDocs />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
