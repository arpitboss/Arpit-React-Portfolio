import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useVelocity } from 'framer-motion';
import { Cat } from 'lucide-react';

const CursorCat = () => {
  const [facingRight, setFacingRight] = useState(true);
  const [isMoving, setIsMoving] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 1 };
  const catX = useSpring(mouseX, springConfig);
  const catY = useSpring(mouseY, springConfig);

  const velocityX = useVelocity(catX);
  const velocityY = useVelocity(catY);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset so the cat follows slightly behind and below the cursor
      mouseX.set(e.clientX + 20);
      mouseY.set(e.clientY + 20);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let timeout;
    const unsubscribeX = velocityX.onChange((v) => {
      if (v > 10) setFacingRight(true);
      else if (v < -10) setFacingRight(false);
      
      const moving = Math.abs(v) > 5 || Math.abs(velocityY.get()) > 5;
      setIsMoving(moving);
      
      if (!moving) {
        clearTimeout(timeout);
        timeout = setTimeout(() => setIsMoving(false), 100);
      }
    });
    return () => {
      unsubscribeX();
      clearTimeout(timeout);
    };
  }, [velocityX, velocityY]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        x: catX,
        y: catY,
        zIndex: 9999,
        pointerEvents: 'none'
      }}
    >
      <motion.div
        animate={{ 
          scaleX: facingRight ? 1 : -1,
          rotate: isMoving ? (facingRight ? 15 : -15) : 0,
          y: isMoving ? [0, -6, 0] : 0 
        }}
        transition={{
          y: {
            duration: 0.25,
            repeat: isMoving ? Infinity : 0,
            ease: "easeInOut"
          },
          rotate: { duration: 0.2 },
          scaleX: { duration: 0 }
        }}
        className="text-heading/80 dark:text-dark-heading/80"
      >
        <Cat size={28} strokeWidth={1.5} />
      </motion.div>
    </motion.div>
  );
};

export default CursorCat;
