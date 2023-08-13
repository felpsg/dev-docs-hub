import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contacts';

// Importe os outros componentes de página conforme necessário

function App() {
  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        <Router>
          <Header /> {/* Header renderizado fora do componente Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Outras rotas aqui */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
