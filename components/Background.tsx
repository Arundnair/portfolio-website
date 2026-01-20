import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BackgroundProps {
    theme: 'dark' | 'light';
}

const Background: React.FC<BackgroundProps> = ({ theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: { x: number; y: number; z: number; size: number }[] = [];
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 8000); // Adjusted density
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width - canvas.width / 2,
                    y: Math.random() * canvas.height - canvas.height / 2,
                    z: Math.random() * 1000,
                    size: Math.random() * 2
                });
            }
        };

        const draw = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            stars.forEach(star => {
                star.z -= 0.5; // Speed
                if (star.z <= 0) {
                    star.z = 1000;
                    star.x = Math.random() * canvas.width - canvas.width / 2;
                    star.y = Math.random() * canvas.height - canvas.height / 2;
                }

                const x = (star.x / star.z) * 100 + cx;
                const y = (star.y / star.z) * 100 + cy;
                const s = (1000 - star.z) / 1000 * star.size;

                const alpha = (1000 - star.z) / 1000;
                
                // Adaptive star color
                if (theme === 'dark') {
                     ctx.fillStyle = `rgba(200, 220, 255, ${alpha * 0.8})`;
                } else {
                     ctx.fillStyle = `rgba(17, 24, 39, ${alpha * 0.6})`; // dark gray stars
                }
                
                ctx.beginPath();
                ctx.arc(x, y, s, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run effect when theme changes

    return (
        <div className={`fixed inset-0 z-[-1] overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-[#030305]' : 'bg-[#f9fafb]'}`}>
             {/* Starfield Canvas */}
             <canvas ref={canvasRef} className="absolute inset-0 opacity-80" />
             
             {/* Vaporwave Sun/Glow - Adaptive */}
             <div className={`absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] rounded-full blur-[120px] pointer-events-none transition-colors duration-500
                ${theme === 'dark' ? 'bg-gradient-to-b from-neon-purple/20 to-neon-blue/10' : 'bg-gradient-to-b from-blue-400/20 to-purple-400/10'}
             `} />

             {/* Grid Floor - Adaptive */}
             <div className={`absolute bottom-[-10%] left-[-50%] w-[200%] h-[50%] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom animate-grid-flow pointer-events-none mask-linear-fade transition-all duration-500
                ${theme === 'dark' 
                    ? 'bg-[linear-gradient(transparent_0%,rgba(0,243,255,0.08)_1px,transparent_1px),linear-gradient(90deg,transparent_0%,rgba(188,19,254,0.08)_1px,transparent_1px)]' 
                    : 'bg-[linear-gradient(transparent_0%,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.05)_1px,transparent_1px)]'}
             `} />
             
             {/* Atmosphere Overlay */}
             <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 pointer-events-none transition-colors duration-500
                ${theme === 'dark' ? 'from-[#050505]' : 'from-[#f3f4f6]'}
             `} />
             
             {/* Floating Blobs - Adaptive */}
             <motion.div 
                animate={{ 
                    y: [0, -30, 0], 
                    x: [0, 20, 0],
                    opacity: [0.1, 0.2, 0.1] 
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute top-1/3 left-1/4 w-64 h-64 rounded-full blur-[120px] opacity-10 pointer-events-none transition-colors duration-500
                    ${theme === 'dark' ? 'bg-neon-blue' : 'bg-blue-500'}
                `}
             />
             <motion.div 
                animate={{ 
                    y: [0, 40, 0], 
                    x: [0, -20, 0],
                    opacity: [0.1, 0.2, 0.1] 
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none transition-colors duration-500
                    ${theme === 'dark' ? 'bg-neon-purple' : 'bg-purple-500'}
                `}
             />
        </div>
    );
};

export default Background;