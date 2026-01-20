import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-deep-bg relative overflow-hidden" id="skills">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
            <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={headerVariants}
                 className="mb-16 text-center"
            >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-display font-bold mb-4">
                    Technical <span className="gradient-text">Arsenal</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto">
                    Tools and technologies I use to craft digital experiences.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Technical Skills */}
                <div>
                    <h3 className="text-xl font-mono text-neon-blue mb-8">./technical</h3>
                    <div className="space-y-6">
                        {SKILLS.filter(s => s.category === 'Technical').map((skill, index) => (
                            <motion.div 
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-display font-medium text-lg text-white group-hover:text-neon-blue transition-colors">{skill.name}</span>
                                    <span className="font-mono text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full relative"
                                    >
                                        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-xl font-mono text-neon-purple mb-8">./soft-skills</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SKILLS.filter(s => s.category === 'Soft').map((skill, index) => (
                            <motion.div 
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 border border-white/10 bg-white/5 rounded-xl backdrop-blur-sm cursor-default"
                            >
                                <h4 className="font-display text-lg font-bold mb-2 text-white">{skill.name}</h4>
                                <div className="flex gap-1 mt-2">
                                    {[1, 2, 3, 4, 5].map((dot) => (
                                        <div 
                                            key={dot} 
                                            className={`w-2 h-2 rounded-full ${
                                                (skill.level / 20) >= dot ? 'bg-neon-purple' : 'bg-white/10'
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

export default Skills;