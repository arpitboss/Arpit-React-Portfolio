import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerDetection = () => {
      const hoveredElement = document.querySelectorAll(':hover');
      const isHoveringClickable = Array.from(hoveredElement).some(el => {
        const cursor = window.getComputedStyle(el).cursor;
        return cursor === 'pointer' || el.tagName === 'BUTTON' || el.tagName === 'A';
      });

      setIsPointer(isHoveringClickable);
    };

    window.addEventListener('mousemove', (e) => {
      handleMouseMove(e);
      handlePointerDetection();
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 100,
          damping: 10,
          ease: "linear",
        }}
        style={{
          borderColor: isPointer ? 'rgb(126, 34, 206)' : 'rgb(153, 103, 255)', // Purple for light mode and dark mode
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full z-50 pointer-events-none"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          mass: 0.05,
          stiffness: 150,
          damping: 5,
          ease: "linear",
        }}
        style={{
          backgroundColor: isPointer ? 'rgb(255, 255, 255)' : 'rgb(126, 34, 206)', // White for light mode and purple for dark mode
        }}
      />
    </>
  );
};

export default CustomCursor;
