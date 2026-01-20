import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth springs for high-end "liquid" feel - tweaked for larger size
  const springConfig = { stiffness: 100, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Very lazy spring for the large ambient glow
  const glowSpringConfig = { stiffness: 40, damping: 40, mass: 2 };
  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for interactive elements
      const isActionable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hover="true"]') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isActionable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Massive Ambient Glow */}
      <motion.div
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-neon-blue/20 dark:bg-neon-blue/10 rounded-full pointer-events-none z-[9990] blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Trailing Ring - Larger and more prominent */}
      <motion.div
        className="fixed top-0 left-0 border border-black/30 dark:border-white/40 rounded-full pointer-events-none z-[9998]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 80 : 40,
          height: isHovering ? 80 : 40,
          borderColor: isHovering ? 'rgba(0, 243, 255, 0.8)' : 'rgba(188, 19, 254, 0.4)',
          borderWidth: isHovering ? 2 : 1,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 bg-black dark:bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 12 : 16,
          height: isHovering ? 12 : 16,
          scale: isClicking ? 0.8 : 1,
          opacity: isHovering ? 0.5 : 1, // Becomes semi-transparent on hover
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;