import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import CustomCursor from './components/CustomCursor/CustomCursor.jsx';
import LoadingScreen from './components/LoadingScreen/LoadingScreen.jsx';
import PageTransition from './components/PageTransition/PageTransition.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import About from './pages/About.jsx';
import News from './pages/News.jsx';
import { useLenis } from './hooks/useLenis.js';

export default function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();

  // Initialize Lenis smooth scroll
  useLenis();

  const isProjectsPage = location.pathname === '/projects' || location.pathname === '/';

  return (
    <>
      {/* Initial Splash / Loading Screen */}
      {initialLoading && (
        <LoadingScreen onComplete={() => setInitialLoading(false)} />
      )}

      {/* Global Interactive Custom Cursor */}
      <CustomCursor />

      {/* Render header globally for pages other than projects showcase */}
      {!isProjectsPage && <Header />}

      {/* Main Route Content with Smooth Page Transitions */}
      <PageTransition key={location.pathname}>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Projects />} />
        </Routes>
      </PageTransition>
    </>
  );
}
