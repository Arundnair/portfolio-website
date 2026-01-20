import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, Smartphone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 relative overflow-hidden border-t border-white/5" id="contact">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 gradient-text">
                Let's Talk
            </h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            >
                Eager to learn, contribute, and apply knowledge to real-world projects. Open for internships and opportunities.
            </motion.p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                <a href={`mailto:${PERSONAL_INFO.email}`} data-hover="true" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden">
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                        <Mail className="w-5 h-5"/> Say Hello
                    </span>
                    <div className="absolute inset-0 bg-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </a>
                <a href="tel:+917306606376" data-hover="true" className="group relative px-8 py-4 bg-transparent border border-white text-white font-bold rounded-full overflow-hidden">
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                        <Smartphone className="w-5 h-5"/> Call Me
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-mono text-gray-500 border-t border-white/10 pt-12">
                <div className="flex flex-col items-center gap-2">
                    <MapPin className="w-5 h-5 text-neon-blue"/>
                    <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Mail className="w-5 h-5 text-neon-purple"/>
                    <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex justify-center gap-4 items-center">
                    <a href="https://github.com/Arundnair" className="hover:text-white transition-colors" data-hover="true"><Github /></a>
                    <a href="https://www.linkedin.com/in/arundnair" className="hover:text-white transition-colors" data-hover="true"><Linkedin /></a>
                </div>
            </div>
            
            <footer className="mt-20 text-xs text-gray-600">
                © 2025 Arun D Nair. Engineered with React & Framer Motion.
            </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;