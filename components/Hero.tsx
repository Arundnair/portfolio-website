import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -20 },
    visible: { 
      y: 0, 
      opacity: 1, 
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-deep-bg">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360], 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] bg-neon-blue/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [360, 180, 0], 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[100px]" 
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <motion.div style={{ y: y2 }} className="mb-4">
           <motion.span variants={itemVariants} className="inline-block px-3 py-1 mb-4 border border-white/20 rounded-full text-xs uppercase tracking-[0.2em] text-gray-400 backdrop-blur-sm">
             Portfolio 2025
           </motion.span>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="font-display text-7xl md:text-9xl font-bold tracking-tighter mb-4 gradient-text"
        >
          {PERSONAL_INFO.name.toUpperCase()}
        </motion.h1>

        <motion.div variants={itemVariants} className="overflow-hidden">
          <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building the future with <span className="text-white font-medium">Code</span> & <span className="text-white font-medium">Innovation</span>.
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="mt-2 text-neon-blue font-mono text-sm">
            &lt; {PERSONAL_INFO.role} /&gt;
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-12">
           <a href="https://github.com/Arundnair" target="_blank" rel="noreferrer" data-hover="true" className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group">
             <Github className="w-6 h-6 text-gray-300 group-hover:text-neon-blue" />
           </a>
           <a href="https://www.linkedin.com/in/arundnair" target="_blank" rel="noreferrer" data-hover="true" className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group">
             <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-neon-blue" />
           </a>
           <a href={`mailto:${PERSONAL_INFO.email}`} data-hover="true" className="p-3 border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300 group">
             <Mail className="w-6 h-6 text-gray-300 group-hover:text-neon-blue" />
           </a>
        </motion.div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 text-neon-blue" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;