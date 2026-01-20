import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background from './components/Background';

// Noise texture as a memoized constant
const NOISE_TEXTURE = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;

const App: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    
    // Check initial theme from DOM set by index.html script or localStorage
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    // Smooth loading reveal
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  // Memoize noise style object
  const noiseStyle = useMemo(() => ({ backgroundImage: NOISE_TEXTURE }), []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden relative selection:bg-neon-blue selection:text-black">
      <Background theme={theme} />
      
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="loader"
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
            role="progressbar"
            aria-label="Loading portfolio"
          >
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              className="h-[1px] bg-neon-blue"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {isDesktop && <CustomCursor />}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        
        <main className="relative z-10" role="main">
          <Hero />
          
          <div className="relative">
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Experience />
            <Contact />
          </div>
        </main>

        {/* Cinematic Grain & Noise - Overlay on top of everything */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9990] mix-blend-overlay" 
          style={noiseStyle}
          aria-hidden="true"
        />
        
        {/* Dynamic Vignette - Adjusted for Light Mode */}
        <div 
          className="fixed inset-0 pointer-events-none z-[9991] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] transition-colors duration-500" 
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
};

export default App;