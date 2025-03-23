import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        setIsDark(prev => {
            const newTheme = !prev;
            
            if (newTheme) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
            
            return newTheme;
        });
    };

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-center overflow-hidden"
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                className="flex items-center justify-center w-full h-full"
            >
                {isDark ? (
                    <FaMoon className="text-purple-400 text-lg" />
                ) : (
                    <FaSun className="text-amber-500 text-lg" />
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;