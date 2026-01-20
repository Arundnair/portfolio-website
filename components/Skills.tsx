import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-24 relative overflow-hidden" 
      id="skills"
      aria-labelledby="skills-heading"
    >
        {/* Background Grid - subtler on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px] md:bg-[size:24px_24px] pointer-events-none" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="mb-12 md:mb-16 text-center"
            >
                <h2 id="skills-heading" className="text-3xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                    Technical <span className="gradient-text">Arsenal</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto px-4">
                    Tools and technologies I use to craft digital experiences.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                {/* Technical Skills */}
                <div>
                    <h3 className="text-sm md:text-xl font-mono text-neon-blue mb-6 md:mb-8 tracking-widest uppercase">./technical</h3>
                    <div className="space-y-5 md:space-y-6">
                        {SKILLS.filter(s => s.category === 'Technical').map((skill, index) => (
                            <motion.div 
                                key={skill.name}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-display font-medium text-base md:text-lg text-gray-800 dark:text-white group-hover:text-neon-blue transition-colors">{skill.name}</span>
                                    <span className="font-mono text-[10px] md:text-xs text-gray-500 self-center">{skill.level}%</span>
                                </div>
                                <div className="h-1.5 md:h-2 w-full bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full relative"
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-[1px] md:w-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-sm md:text-xl font-mono text-neon-purple mb-6 md:mb-8 tracking-widest uppercase">./soft-skills</h3>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {SKILLS.filter(s => s.category === 'Soft').map((skill, index) => (
                            <motion.div 
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="p-4 md:p-6 border border-black/5 dark:border-white/10 bg-white/50 dark:bg-white/5 rounded-xl backdrop-blur-sm active:bg-black/5 dark:active:bg-white/10 shadow-sm dark:shadow-none"
                            >
                                <h4 className="font-display text-sm md:text-lg font-bold mb-2 text-gray-800 dark:text-white">{skill.name}</h4>
                                <div className="flex gap-1 mt-1">
                                    {[1, 2, 3, 4, 5].map((dot) => (
                                        <div 
                                            key={dot} 
                                            className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${
                                                (skill.level / 20) >= dot ? 'bg-neon-purple' : 'bg-black/10 dark:bg-white/10'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default memo(Skills);