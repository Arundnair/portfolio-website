import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-black/40" id="experience">
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Journey <span className="text-neon-purple">&</span> Milestones
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                My professional path, education, and key achievements in the tech landscape.
            </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12">
            {EXPERIENCE.map((exp, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-0"
                >
                    {/* Icon Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-deep-bg border-2 border-neon-blue shadow-[0_0_10px_#00f3ff]" />
                    
                    <div className={`md:flex items-start justify-between gap-12 group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                         {/* Spacer for timeline centering alignment */}
                        <div className="hidden md:block flex-1" />

                        <div className="flex-1 mb-2 md:mb-0">
                             <div className={`p-6 bg-white/5 border border-white/10 rounded-xl hover:border-neon-blue/30 transition-all duration-300 hover:bg-white/10 relative overflow-hidden group-hover:translate-x-2`}>
                                {/* Background glow on hover */}
                                <div className="absolute -right-10 -top-10 w-20 h-20 bg-neon-blue/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-center gap-2 mb-2 text-neon-blue font-mono text-xs">
                                    {exp.type === 'Education' ? <GraduationCap size={14}/> : <Briefcase size={14}/>}
                                    {exp.type}
                                </div>
                                <h3 className="text-xl font-bold font-display text-white">{exp.role}</h3>
                                <p className="text-gray-400 font-medium text-sm mb-2">{exp.company}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                                <span className="absolute top-6 right-6 text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded">
                                    {exp.year}
                                </span>
                             </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;