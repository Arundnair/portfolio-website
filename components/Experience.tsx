import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section 
      className="py-32 relative bg-black/5 dark:bg-black/20" 
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24 text-center"
        >
            <h2 id="experience-heading" className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900 dark:text-white">
                Career <span className="text-neon-purple">Journey</span>
            </h2>
            <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
                Evolution of Skills and Experiences
            </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
            {/* Dynamic Timeline Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-neon-blue via-neon-purple to-transparent origin-top hidden md:block" 
              aria-hidden="true"
            />
            
            <div className="space-y-24">
                {EXPERIENCE.map((exp, index) => (
                    <motion.article 
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                        aria-label={`${exp.type}: ${exp.role} at ${exp.company}`}
                    >
                        <div className={`md:flex items-center group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Content Side */}
                            <div className="md:w-1/2 px-8">
                                <motion.div 
                                  whileHover={{ y: -5 }}
                                  className="p-8 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:bg-white dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/20 shadow-xl dark:shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity text-black dark:text-white" aria-hidden="true">
                                      {exp.type === 'Education' ? <GraduationCap size={48}/> : <Briefcase size={48}/>}
                                    </div>
                                    
                                    <div className="flex items-center gap-3 mb-4">
                                      <span className="text-[10px] font-mono tracking-widest text-neon-blue uppercase px-2 py-1 bg-neon-blue/10 rounded">
                                        {exp.year}
                                      </span>
                                      <span className="h-[1px] flex-grow bg-black/10 dark:bg-white/10" />
                                    </div>

                                    <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-1 group-hover:text-neon-blue transition-colors">
                                      {exp.role}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-medium mb-4 text-sm tracking-wide">{exp.company}</p>
                                    <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed font-light">
                                      {exp.description}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Center Dot (Desktop Only) */}
                            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center" aria-hidden="true">
                              <motion.div 
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                                className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 border border-black/10 dark:border-none" 
                              />
                            </div>

                            {/* Empty Side for Spacing */}
                            <div className="hidden md:block md:w-1/2" aria-hidden="true" />
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Experience);