import React from 'react';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import Chat from './components/Chat';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CssStep1 from './Tutorial/Css/Step1';
import CssStep2 from './Tutorial/Css/Step2';
import JavaScriptStep1 from './Tutorial/JavaScript/Step1';
import JavaScriptStep2 from './Tutorial/JavaScript/Step2';
import JavaScriptStep3 from './Tutorial/JavaScript/Step3';
import JavaScriptStep4 from './Tutorial/JavaScript/Step4';
import ReactStep1 from './Tutorial/React/Step1';
import ReactStep2 from './Tutorial/React/Step2';
import ReactStep3 from './Tutorial/React/Step3';
import TutorialPage from './Tutorial/TutorialPage';

import './App.css';

function App() {
  const location = useLocation();
  const shouldRenderSidebar = !location.pathname.startsWith('/login');

  return (
    <div className="content-container">
      <Header />
      <div className="container-fluid">
        <div className="row">
          {shouldRenderSidebar && <Sidebar />}
          <div className={`col-md-${shouldRenderSidebar ? '9' : '12'}`}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
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
              <Route
                path="/tutorial/css/*"
                element={<TutorialPage tutorialType="css" />}
              >
                <Route path="step1" element={<CssStep1 />} />
                <Route path="step2" element={<CssStep2 />} />
              </Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
