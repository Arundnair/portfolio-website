import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const NAV_ITEMS = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Certs', id: 'certificates' },
  { name: 'Journey', id: 'experience' },
  { name: 'Contact', id: 'contact' }
] as const;

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          
          const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'experience', 'contact'];
          for (const section of sections.slice().reverse()) {
            const el = document.getElementById(section);
            if (el && window.scrollY >= el.offsetTop - 250) {
              setActiveSection(section);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollTo(id);
    }
  }, [scrollTo]);

  return (
    <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 md:py-6 pointer-events-none"
        role="navigation"
        aria-label="Main navigation"
    >
        <div className={`
            flex items-center p-1 md:p-1.5 rounded-full pointer-events-auto
            ${isScrolled 
              ? 'bg-white/80 dark:bg-black/60 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl' 
              : 'bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/5'}
            transition-all duration-700 overflow-x-auto max-w-[92vw] md:max-w-none no-scrollbar
        `}>
            {NAV_ITEMS.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, item.id)}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                    className={`
                      relative px-4 md:px-6 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 rounded-full
                      ${activeSection === item.id 
                        ? 'text-black dark:text-black' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}
                    `}
                    data-hover="true"
                >
                    <span className="relative z-10">{item.name}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white rounded-full z-0 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                </button>
            ))}
            
            <div className="w-[1px] h-4 bg-gray-300 dark:bg-white/20 mx-2" aria-hidden="true" />
            
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors mr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2"
                data-hover="true"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                aria-pressed={theme === 'dark'}
            >
                <AnimatePresence mode="wait">
                    {theme === 'dark' ? (
                        <motion.div
                            key="moon"
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Moon className="w-4 h-4 text-white" aria-hidden="true" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ scale: 0, rotate: 90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: -90 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Sun className="w-4 h-4 text-gray-900" aria-hidden="true" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </div>
    </motion.nav>
  );
};

export default memo(Navbar);