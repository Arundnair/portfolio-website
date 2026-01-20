import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    },
  };

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20">
        <div className="md:col-span-4">
          <motion.div
             initial={{ opacity: 0, scaleY: 0 }}
             animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
             transition={{ duration: 0.8, ease: "circOut" }}
             className="origin-top"
          >
            <h2 className="text-[10px] md:text-sm font-mono text-neon-blue tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-8 uppercase">
              01. Background
            </h2>
          </motion.div>
          <div className="hidden md:block relative h-64">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              className="w-[1px] bg-gradient-to-b from-neon-blue via-neon-purple/50 to-transparent"
            />
          </div>
        </div>
        
        <div className="md:col-span-8" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-wrap"
          >
            {PERSONAL_INFO.about.split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden mr-2 md:mr-3 mb-1 md:mb-2">
                <motion.span
                  variants={lineVariants}
                  className="inline-block font-display text-2xl md:text-6xl leading-[1.2] md:leading-[1.1] font-light text-gray-800 dark:text-white/90"
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 font-mono text-[10px] md:text-xs tracking-wider text-gray-500 border-t border-black/5 dark:border-white/5 pt-8 md:pt-12 uppercase"
          >
             <div className="group cursor-default">
               <span className="block text-neon-blue mb-3 md:mb-4 tracking-[0.2em] md:tracking-[0.3em]">Education / Status</span>
               <p className="text-gray-900 dark:text-white text-base md:text-lg font-display normal-case leading-tight">
                 B.Tech Computer Science Engineering<br/>
                 <span className="text-gray-500 text-xs md:text-sm">VISAT Engineering (2022-2026)</span>
               </p>
             </div>
             <div className="group cursor-default">
               <span className="block text-neon-purple mb-3 md:mb-4 tracking-[0.2em] md:tracking-[0.3em]">Current Focus</span>
               <p className="text-gray-900 dark:text-white text-base md:text-lg font-display normal-case leading-tight">
                 AI/ML Applications & <br/>
                 Cross-platform Mobile Development
               </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;