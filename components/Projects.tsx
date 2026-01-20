import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { 
  ArrowUpRight, 
  Github, 
  Code2, 
  Brain, 
  Cpu, 
  Eye, 
  Smartphone, 
  Flame, 
  Database, 
  Layers,
  Terminal,
  ExternalLink
} from 'lucide-react';

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('python')) return <Code2 className="w-3 h-3" />;
  if (t.includes('ai') || t.includes('ml')) return <Brain className="w-3 h-3" />;
  if (t.includes('iot')) return <Cpu className="w-3 h-3" />;
  if (t.includes('vision')) return <Eye className="w-3 h-3" />;
  if (t.includes('flutter')) return <Smartphone className="w-3 h-3" />;
  if (t.includes('firebase')) return <Flame className="w-3 h-3" />;
  if (t.includes('dart')) return <Terminal className="w-3 h-3" />;
  if (t.includes('database')) return <Database className="w-3 h-3" />;
  return <Layers className="w-3 h-3" />;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Disable heavy tilt on touch devices via simple width check or touch event detection
        if (window.matchMedia("(pointer: coarse)").matches) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            variants={cardVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full min-h-[420px] md:min-h-[480px] rounded-3xl bg-white/40 dark:bg-white/[0.03] border border-black/5 dark:border-white/10 p-6 md:p-8 backdrop-blur-[16px] md:backdrop-blur-[24px] group overflow-hidden shadow-lg dark:shadow-none"
        >
            {/* Liquid Background Pulse - subtle on mobile */}
            <div className="absolute inset-0 -z-10 opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        x: [0, 50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-neon-blue/10 dark:bg-neon-blue/20 blur-[60px] md:blur-[100px] rounded-full"
                />
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        x: [0, -40, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-neon-purple/10 dark:bg-neon-purple/20 blur-[60px] md:blur-[100px] rounded-full"
                />
            </div>

            {/* Glass Corner Brackets */}
            <div className="absolute top-0 left-0 w-6 md:w-8 h-6 md:h-8 border-t-2 border-l-2 border-black/10 dark:border-white/20 group-hover:border-neon-blue transition-colors duration-500 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-6 md:w-8 h-6 md:h-8 border-b-2 border-r-2 border-black/10 dark:border-white/20 group-hover:border-neon-purple transition-colors duration-500 rounded-br-3xl" />

            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col justify-between relative z-10">
                <div>
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                        <span className="text-neon-blue font-mono text-[9px] md:text-[10px] tracking-[0.2em] border border-neon-blue/30 px-3 py-1 rounded-full bg-neon-blue/5 uppercase">
                            {project.category}
                        </span>
                        <div className="flex gap-2 md:gap-3">
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2 md:p-2.5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-xl border border-black/5 dark:border-white/10 transition-all duration-300 text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white" 
                                data-hover="true"
                            >
                                <Github className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-2 md:p-2.5 bg-neon-blue/10 hover:bg-neon-blue/20 rounded-xl border border-neon-blue/20 transition-all duration-300 text-neon-blue/70 hover:text-neon-blue" 
                                data-hover="true"
                            >
                                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                            </a>
                        </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-4xl font-display font-bold mb-3 md:mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:to-white transition-all duration-500">
                        {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-light">
                        {project.description}
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {project.tech.map(t => (
                            <span key={t} className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] font-mono text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 px-2 md:px-3 py-1 md:py-1.5 rounded-lg transition-all duration-300">
                                <span className="text-neon-blue">
                                    {getTechIcon(t)}
                                </span>
                                {t}
                            </span>
                        ))}
                    </div>

                    <div className="pt-4 md:pt-6 border-t border-black/5 dark:border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="text-[9px] text-gray-500 font-mono tracking-widest uppercase">
                            Rel. {project.year}
                        </div>
                        <div className="flex gap-4 w-full sm:w-auto">
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 sm:flex-none text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-white/50 hover:text-neon-blue transition-colors flex items-center justify-center gap-2 group/link"
                                data-hover="true"
                            >
                                Live <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 sm:flex-none text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-white/50 hover:text-neon-purple transition-colors flex items-center justify-center gap-2 group/link"
                                data-hover="true"
                            >
                                Source <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Scanned Line Animation */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 blur-[1px] -translate-y-full group-hover:animate-scanline pointer-events-none" />
        </motion.div>
    );
};

const Projects: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto overflow-hidden" id="projects">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-24 relative"
        >
            <div className="flex items-center gap-4 md:gap-6 mb-4">
                <span className="text-[10px] md:text-xs font-mono text-neon-blue tracking-[0.3em] md:tracking-[0.5em] uppercase">Project Library</span>
                <div className="h-[1px] flex-grow bg-black/10 dark:bg-white/10" />
            </div>

            <h2 className="text-4xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-4 md:mb-6 tracking-tighter">
                Crafting <span className="gradient-text italic">Futures</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-500 text-sm md:text-xl max-w-2xl font-light leading-relaxed">
                A curated selection of deep-tech engineering and creative development projects pushing boundaries.
            </p>
        </motion.div>

        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 perspective-[2500px]"
        >
            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </motion.div>
    </section>
  );
};

export default Projects;