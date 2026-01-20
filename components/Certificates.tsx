import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { Award, Calendar, ExternalLink, ShieldCheck, Download } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="certificates">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 text-center"
        >
             <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-neon-blue/50" />
                <span className="text-neon-blue font-mono text-xs tracking-[0.5em] uppercase">Credentials</span>
                <div className="h-[1px] w-12 bg-neon-blue/50" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-gray-900 dark:text-white">
                Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Excellence</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative"
                >
                    {/* Tech Border Decorations */}
                    <div className="absolute -inset-[1px] bg-gradient-to-b from-neon-blue/30 to-neon-purple/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    <div className="relative bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-lg overflow-hidden hover:border-black/20 dark:hover:border-white/30 transition-colors duration-500 flex flex-col h-full shadow-lg dark:shadow-none">
                        
                        {/* Image Preview Section */}
                        <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-white/5 group">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                                <a 
                                    href={cert.credentialUrl} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="p-3 bg-neon-blue/20 hover:bg-neon-blue/40 rounded-full text-neon-blue backdrop-blur-md transform scale-0 group-hover:scale-100 transition-all duration-300 delay-75"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            {/* Image */}
                            {cert.imageUrl ? (
                                <img 
                                    src={cert.imageUrl} 
                                    alt={cert.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-900 dark:to-black">
                                    <Award className="w-12 h-12 text-gray-400 dark:text-white/20" />
                                </div>
                            )}

                            {/* Corner Decals */}
                            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-neon-blue opacity-50" />
                            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-neon-blue opacity-50" />
                            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-neon-blue opacity-50" />
                            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-neon-blue opacity-50" />
                        </div>

                        {/* Content Section */}
                        <div className="p-6 flex flex-col flex-grow relative">
                            {/* Scanning line for tech feel */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="flex justify-between items-start mb-3">
                                <span className="text-[10px] font-mono text-neon-purple tracking-widest uppercase border border-neon-purple/30 px-2 py-0.5 rounded bg-neon-purple/5">
                                    Verified
                                </span>
                                <span className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                                    <Calendar size={10} /> {cert.date}
                                </span>
                            </div>

                            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-neon-blue transition-colors">
                                {cert.title}
                            </h3>
                            
                            <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 flex items-center gap-2">
                                <ShieldCheck size={12} className="text-neon-blue" />
                                {cert.issuer}
                            </p>

                            <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-2">
                                {cert.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="text-[9px] font-mono text-gray-500 bg-black/5 dark:bg-white/5 px-2 py-1 rounded hover:bg-black/10 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors cursor-default">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        
        {/* Decorative Grid Background for this section specifically */}
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none z-0" />
      </div>
    </section>
  );
};

export default Certificates;