import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full h-[400px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 backdrop-blur-xl group cursor-pointer"
        >
            <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="h-full flex flex-col justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-neon-blue font-mono text-xs border border-neon-blue/30 px-2 py-1 rounded">
                            {project.category}
                        </span>
                        <div className="flex gap-2">
                           {/* Simulated Links since resume doesn't have specific ones per project */}
                            <button className="p-2 hover:bg-white/20 rounded-full transition-colors" data-hover="true">
                                <Github className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-white/20 rounded-full transition-colors" data-hover="true">
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-neon-blue transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>
                </div>

                <div>
                    <div className="h-[1px] w-full bg-white/10 mb-4" />
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="text-xs font-mono text-gray-400 bg-black/30 px-2 py-1 rounded">
                                #{t}
                            </span>
                        ))}
                    </div>
                    <div className="mt-4 text-xs text-gray-500 font-mono">
                        {project.year}
                    </div>
                </div>
            </div>
            
            {/* Glow Effect */}
            <div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" 
                style={{ transform: "translateZ(-50px)" }}
            />
        </motion.div>
    );
};

const Projects: React.FC = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-32 px-4 md:px-12 max-w-7xl mx-auto" id="projects">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headerVariants}
            className="mb-20"
        >
            <div className="flex items-end gap-4 mb-4">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                    Selected Works
                </h2>
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="h-4 w-4 bg-neon-blue rounded-full mb-3 md:mb-4 animate-pulse-fast" 
                />
            </div>
            <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-400 text-lg max-w-xl"
            >
                A collection of projects demonstrating my expertise in full-stack development and creative engineering.
            </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 perspective-[2000px]">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
            ))}
        </div>
    </section>
  );
};

export default Projects;