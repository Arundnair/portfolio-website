import React, { useRef, memo, useMemo } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Cpu, Globe, Zap, Database } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  };

  return (
    <section 
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden" 
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-neon-purple/5 to-transparent rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        
        {/* Left Column - Header & Visuals */}
        <div className="md:col-span-5 relative">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="sticky top-32"
          >
            <h2 className="text-xs font-mono text-neon-blue tracking-[0.5em] mb-6 uppercase flex items-center gap-4">
              <span className="w-8 h-[1px] bg-neon-blue"></span>
              01. The Profile
            </h2>
            
            <h3 id="about-heading" className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-8">
              Architecting <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Digital Reality</span>
            </h3>

            {/* Stylized "Card" */}
            <div className="relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 backdrop-blur-xl overflow-hidden shadow-xl dark:shadow-none group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center text-xl font-bold font-display text-gray-700 dark:text-white">
                        AN
                    </div>
                    <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Arun D Nair</div>
                        <div className="text-xs text-gray-500 font-mono">System.Online</div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between text-xs border-b border-black/5 dark:border-white/5 pb-2">
                        <span className="text-gray-500">Location</span>
                        <span className="text-gray-900 dark:text-white font-medium text-right">{PERSONAL_INFO.location}</span>
                    </div>
                    <div className="flex justify-between text-xs border-b border-black/5 dark:border-white/5 pb-2">
                        <span className="text-gray-500">Education</span>
                        <span className="text-gray-900 dark:text-white font-medium text-right">B.Tech CSE</span>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Focus</span>
                        <span className="text-neon-blue font-medium text-right">AI & IoT Innovation</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column - Main Content */}
        <div className="md:col-span-7" ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="prose dark:prose-invert max-w-none"
          >
            {/* Split text animation for main paragraph */}
            <div className="mb-10">
                {PERSONAL_INFO.about.split(". ").map((sentence, sIndex) => (
                    <motion.p key={sIndex} variants={itemVariants} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-6">
                        {sentence}.
                    </motion.p>
                ))}
            </div>

            {/* Interest Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
                {[
                    { icon: <Cpu className="w-5 h-5"/>, title: "Deep Learning", desc: "Neural Networks & CV" },
                    { icon: <Globe className="w-5 h-5"/>, title: "Web Technologies", desc: "React & Next.js" },
                    { icon: <Zap className="w-5 h-5"/>, title: "IoT Systems", desc: "Embedded Logic" },
                    { icon: <Database className="w-5 h-5"/>, title: "Data Engineering", desc: "Processing & Analytics" },
                ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-neon-blue/30 transition-colors group">
                        <div className="mb-3 text-neon-blue group-hover:scale-110 transition-transform duration-300 origin-left">
                            {item.icon}
                        </div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 p-6 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl border border-neon-blue/20 flex items-center justify-between">
                <div>
                    <div className="text-xs font-mono text-neon-blue mb-1">CURRENTLY WORKING ON</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">LumiSense AI Co-pilot</div>
                </div>
                <div className="animate-pulse">
                    <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);