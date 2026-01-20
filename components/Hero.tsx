import React from 'react';
import { motion, useScroll, useTransform, useSpring, Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax effects - Adjusted for deeper depth perception
  const yText = useTransform(scrollY, [0, 1000], [0, 400]); // Foreground moves faster
  const yBg = useTransform(scrollY, [0, 1000], [0, -150]); // Background moves in reverse/slower
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]); // Subtle zoom on background
  const blur = useTransform(scrollY, [0, 400], ["0px", "10px"]); // Blur background on scroll

  const smoothYText = useSpring(yText, { stiffness: 50, damping: 20 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0, skewY: 3 },
    visible: { 
      y: 0, 
      opacity: 1, 
      skewY: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Dynamic Background Layer with Parallax */}
      <motion.div 
        style={{ y: yBg, scale, filter: blur }} 
        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      >
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 45, 0], 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] bg-gradient-to-br from-neon-blue/15 via-transparent to-neon-purple/15 dark:from-neon-blue/10 dark:to-neon-purple/10 blur-[100px] md:blur-[130px]" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.05)_0%,transparent_60%)]" />
      </motion.div>

      {/* Main Content Layer */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: smoothYText, opacity }}
        className="relative z-10 text-center px-6 max-w-7xl w-full"
      >
        <motion.div className="mb-8 flex justify-center overflow-hidden">
           <motion.div 
             variants={itemVariants} 
             className="relative group cursor-default"
           >
             <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
             <span className="relative inline-block px-4 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-[10px] uppercase tracking-[0.25em] text-gray-900 dark:text-white font-mono bg-white/50 dark:bg-black/50 backdrop-blur-md">
               Software Engineer & Innovator
             </span>
           </motion.div>
        </motion.div>

        <div className="overflow-visible mb-6 relative">
          <motion.h1 
            variants={itemVariants} 
            className="font-display text-[12vw] md:text-[10rem] font-bold tracking-tighter leading-[0.85] gradient-text uppercase mix-blend-difference dark:mix-blend-normal"
          >
            {PERSONAL_INFO.name.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-4 md:mr-8 last:mr-0">{word}</span>
            ))}
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-10">
          <motion.p variants={itemVariants} className="font-sans text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Building the bridge between <span className="text-black dark:text-white font-medium">Human Potential</span> and 
            <span className="text-black dark:text-white font-medium"> Artificial Intelligence</span>.
          </motion.p>
        </div>
        
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-8">
          <div className="flex justify-center gap-6">
            {[
              { icon: <Github />, url: "https://github.com/Arundnair", label: "Github" },
              { icon: <Linkedin />, url: "https://www.linkedin.com/in/arundnair", label: "LinkedIn" },
              { icon: <Mail />, url: `mailto:${PERSONAL_INFO.email}`, label: "Email" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                data-hover="true"
                className="group relative p-3 md:p-4 rounded-full bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-neon-blue/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                {React.cloneElement(social.icon as React.ReactElement<any>, { size: 24, className: "relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" })}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
            <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;