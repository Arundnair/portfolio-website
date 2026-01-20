import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { Award, Calendar } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section className="py-24 relative" id="certificates">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
        >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                Certifications <span className="text-neon-blue">&</span> Awards
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Recognition of my commitment to continuous learning and excellence.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative h-full bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300 flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-white/5 rounded-lg text-neon-blue group-hover:text-white group-hover:bg-neon-blue/20 transition-colors">
                                <Award className="w-6 h-6" />
                            </div>
                            <span className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-black/40 px-2 py-1 rounded border border-white/5">
                                <Calendar className="w-3 h-3" /> {cert.date}
                            </span>
                        </div>

                        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                            {cert.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-6 flex-grow">
                            Issued by <span className="text-white font-medium">{cert.issuer}</span>
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {cert.tags.map((tag, tIndex) => (
                                <span key={tIndex} className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;