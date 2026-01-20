import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIALS } from '../constants';
import { Github, Linkedin, Mail, Smartphone, MapPin } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

const Contact: React.FC = () => {
  return (
    <section 
      className="py-24 px-4 md:px-12 relative overflow-hidden border-t border-black/5 dark:border-white/5" 
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/5 dark:bg-neon-purple/10 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <h2 id="contact-heading" className="text-5xl md:text-8xl font-display font-bold mb-8 gradient-text">
                Let's Talk
            </h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            >
                Eager to learn, contribute, and apply knowledge to real-world projects. Open for internships and opportunities.
            </motion.p>

            <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  data-hover="true" 
                  className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-full overflow-hidden shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2"
                  aria-label="Send an email"
                >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                        <Mail className="w-5 h-5" aria-hidden="true" /> Say Hello
                    </span>
                    <div className="absolute inset-0 bg-neon-blue translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" aria-hidden="true" />
                </a>
                <a 
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`} 
                  data-hover="true" 
                  className="group relative px-8 py-4 bg-transparent border border-black dark:border-white text-black dark:text-white font-bold rounded-full overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2"
                  aria-label="Call phone number"
                >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                        <Smartphone className="w-5 h-5" aria-hidden="true" /> Call Me
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" aria-hidden="true" />
                </a>
            </div>

            <address className="not-italic grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-mono text-gray-500 border-t border-black/5 dark:border-white/10 pt-12">
                <div className="flex flex-col items-center gap-2">
                    <MapPin className="w-5 h-5 text-neon-blue" aria-hidden="true" />
                    <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Mail className="w-5 h-5 text-neon-purple" aria-hidden="true" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-neon-blue transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                </div>
                <nav className="flex justify-center gap-4 items-center" aria-label="Social media links">
                    {SOCIALS.filter(s => s.icon !== 'mail').map((social) => (
                      <a 
                        key={social.platform}
                        href={social.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black dark:hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue rounded-sm" 
                        data-hover="true"
                        aria-label={`Visit ${social.platform}`}
                      >
                        {social.icon === 'github' && <Github aria-hidden="true" />}
                        {social.icon === 'linkedin' && <Linkedin aria-hidden="true" />}
                      </a>
                    ))}
                </nav>
            </address>
            
            <footer className="mt-20 text-xs text-gray-400 dark:text-gray-600">
                <p>© {CURRENT_YEAR} {PERSONAL_INFO.name}. Engineered with React & Framer Motion.</p>
            </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Contact);