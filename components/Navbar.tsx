import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-300 pointer-events-none`}
    >
        <div className={`
            flex items-center gap-4 md:gap-8 px-6 md:px-8 py-3 rounded-full pointer-events-auto
            ${isScrolled ? 'bg-white/5 backdrop-blur-md border border-white/10 shadow-lg' : 'bg-transparent'}
            transition-all duration-500 overflow-x-auto max-w-[95vw] md:max-w-none no-scrollbar
        `}>
            {['About', 'Skills', 'Projects', 'Certificates', 'Experience', 'Contact'].map((item) => (
                <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group whitespace-nowrap"
                    data-hover="true"
                >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue group-hover:w-full transition-all duration-300" />
                </button>
            ))}
        </div>
    </motion.nav>
  );
};

export default Navbar;