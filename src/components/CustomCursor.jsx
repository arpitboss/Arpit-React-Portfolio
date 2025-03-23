import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastActivityRef = useRef(Date.now());
  const rafRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      setMousePosition({ x: e.clientX, y: e.clientY });
      lastActivityRef.current = Date.now();
      setIsVisible(true);

      rafRef.current = requestAnimationFrame(() => {
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        if (hoveredElement) {
          const computedStyle = window.getComputedStyle(hoveredElement);
          const isHoveringClickable =
            computedStyle.cursor === 'pointer' ||
            hoveredElement.tagName === 'BUTTON' ||
            hoveredElement.tagName === 'A';

          setIsPointer(isHoveringClickable);
        }
      });
    };

    const handleClick = () => {
      setIsVisible(true);
      lastActivityRef.current = Date.now();
    };

    const inactivityTimer = setInterval(() => {
      if (Date.now() - lastActivityRef.current > 2000) {
        setIsVisible(false);
      }
    }, 500);

    document.body.style.cursor = 'none';

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearInterval(inactivityTimer);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
        willChange: 'transform',
        transform: `translate(${mousePosition.x - 16}px, ${mousePosition.y - 16}px)`,
        mixBlendMode: 'difference'
      }}
    >
      {isPointer ? (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" fill="white" />
        </svg>
      ) : (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4L25 16L16 17.3L12 26.7L7 4Z" fill="white" />
        </svg>
      )}
    </motion.div>
  );
};

export default CustomCursor;