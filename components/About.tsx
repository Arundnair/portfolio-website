import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const text = PERSONAL_INFO.about.split(" ");

  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto relative" id="about">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm font-mono text-neon-blue tracking-widest mb-4 uppercase"
          >
            01. Who am I?
          </motion.h2>
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100px' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-[1px] bg-gradient-to-b from-neon-blue to-transparent"
          />
        </div>
        
        <div className="md:col-span-8" ref={ref}>
          <p className="font-display text-3xl md:text-5xl leading-tight font-light text-white/90">
            {text.map((el, i) => (
              <motion.span
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.02,
                  ease: "easeOut"
                }}
                key={i}
                className="inline-block mr-3"
              >
                {el}
              </motion.span>
            ))}
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 grid grid-cols-2 gap-8 font-mono text-sm text-gray-400 border-t border-white/10 pt-8"
          >
             <div>
               <span className="block text-white mb-1">Education</span>
               VISAT Engineering College<br/>
               B.Tech CSE (2022-2026)
             </div>
             <div>
               <span className="block text-white mb-1">Location</span>
               {PERSONAL_INFO.location}
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;