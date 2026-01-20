import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yBg = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const smoothYText = useSpring(yText, { stiffness: 100, damping: 20 });

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
    hidden: { y: 60, opacity: 0, skewY: 3 },
    visible: { 
      y: 0, 
      opacity: 1, 
      skewY: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <motion.div style={{ y: yBg, scale }} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0], 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[140%] h-[140%] bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10 dark:from-neon-blue/10 dark:to-neon-purple/10 blur-[100px] md:blur-[120px]" 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(0,243,255,0.08)_0%,transparent_70%)]" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: smoothYText, opacity }}
        className="relative z-10 text-center px-6 max-w-6xl w-full"
      >
        <motion.div className="mb-6 md:mb-8 flex justify-center overflow-hidden">
           <motion.span variants={itemVariants} className="inline-block px-3 md:px-4 py-1 border border-black/10 dark:border-white/10 rounded-full text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-neon-blue font-mono bg-black/5 dark:bg-white/5 backdrop-blur-sm">
             Available for Internships
           </motion.span>
        </motion.div>

        <div className="overflow-hidden mb-4 md:mb-6">
          <motion.h1 
            variants={itemVariants} 
            className="font-display text-[15vw] md:text-[12rem] font-bold tracking-tighter leading-[0.9] gradient-text uppercase"
          >
            {PERSONAL_INFO.name.split(" ").map((word, i) => (
              <span key={i} className="inline-block md:mr-4 last:mr-0">{word}</span>
            ))}
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8 md:mb-10">
          <motion.p variants={itemVariants} className="font-sans text-lg md:text-3xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-snug px-4">
            Crafting <span className="text-black dark:text-white italic font-normal">Intelligent</span> Software & 
            <span className="text-black dark:text-white font-normal"> Digital Experiences</span>.
          </motion.p>
        </div>
        
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 md:gap-8">
          <div className="flex justify-center gap-8 md:gap-10">
            {[
              { icon: <Github />, url: "https://github.com/Arundnair" },
              { icon: <Linkedin />, url: "https://www.linkedin.com/in/arundnair" },
              { icon: <Mail />, url: `mailto:${PERSONAL_INFO.email}` }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                data-hover="true" 
                className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-300 transform active:scale-90 md:hover:scale-125"
              >
                {React.cloneElement(social.icon as React.ReactElement<any>, { size: 24, className: "md:w-7 md:h-7" })}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          data-hover="true"
        >
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-black to-transparent dark:from-white dark:to-transparent" />
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-gray-500 font-mono">Discover</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;