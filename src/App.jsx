import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

// Helper to scroll to top or hash on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-surface selection:bg-primary/20 overflow-x-hidden relative min-h-screen">
        <ScrollToTop />
        <div className="relative z-0">
          <div className="bg-mesh" />
        </div>
        <main className="relative isolate z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Projects />} />
            <Route path="/projects" element={<Navigate to="/archive" replace />} />
            <Route path="/node/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
