import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AnimatedText = ({ text, className = "", style = {} }) => {
    const shouldReduceMotion = useReducedMotion();
    const letters = Array.from(text);

    return (
        <div className={`flex ${className}`} style={style}>
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    style={{
                        background: 'linear-gradient(90deg, #7c3aed, #ec4899)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                    whileHover={
                        shouldReduceMotion
                            ? { scale: 1.05, y: -2, WebkitTextFillColor: '#FFFFFF' }
                            : {
                                scale: 1.1,
                                y: -3,
                                WebkitTextFillColor: '#5B21B6',
                                transition: { type: 'spring', stiffness: 300, damping: 20 }
                            }
                    }
                    className="mx-0.5"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
};

export default AnimatedText;
