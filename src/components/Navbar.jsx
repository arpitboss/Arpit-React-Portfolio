import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const menuRef = useRef(null);

    const navItems = [
        { id: 'home', icon: '🏠', text: 'Home', offset: -100 },
        { id: 'about', icon: '👤', text: 'About', offset: -100 },
        { id: 'skills', icon: '💻', text: 'Skills', offset: -100 },
        { id: 'projects', icon: '🚀', text: 'Projects', offset: -100 },
        { id: 'experience', icon: '📈', text: 'Experience', offset: -100 },
        { id: 'contact', icon: '✉️', text: 'Contact', offset: -80 },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                when: "afterChildren"
            }
        },
        open: {
            opacity: 1,
            height: 'auto',
            transition: {
                duration: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        closed: {
            opacity: 0,
            x: -20,
            transition: { duration: 0.2 }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-lg bg-white/80 dark:bg-gray-900/85 shadow-lg shadow-purple-500/10'
                : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link
                        to="home"
                        smooth={true}
                        duration={800}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center group"
                        >
                            <div className="relative overflow-hidden rounded-xl">
                                <span className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent font-mono group-hover:tracking-wider transition-all duration-300">
                                    AV
                                </span>
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-pink-600 group-hover:w-full transition-all duration-300"
                                    whileHover={{ width: '100%' }}
                                />
                            </div>
                        </motion.div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex">
                            {navItems.map((item) => (
                                <motion.div key={item.id} className="relative group">
                                    <Link
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={600}
                                        offset={item.offset}
                                        activeClass="active"
                                        className={`px-4 py-2 mx-1 flex items-center transition-colors duration-100 cursor-pointer ${activeSection === item.id
                                                ? 'text-purple-600 dark:text-purple-400 font-medium'
                                                : 'text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                                            }`}
                                    >
                                        <span className={`mr-2 transition-transform duration-300 ${activeSection === item.id ? 'transform scale-110' : 'group-hover:transform group-hover:scale-110'
                                            }`}>
                                            {item.icon}
                                        </span>
                                        <span className="font-medium">{item.text}</span>
                                    </Link>
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-violet-600 to-pink-600"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </nav>

                        <div className="flex items-center justify-center">
                            <div className="w-10 h-10 flex items-center justify-center">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className="md:hidden p-3 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-purple-500/20 cursor-pointer"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? 'close' : 'open'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden overflow-hidden"
                    >
                        <div className="backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 px-4 py-5 shadow-xl shadow-purple-500/10 rounded-b-3xl mx-4 mb-6">
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
                                <div className="text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent">
                                    Navigation
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <ThemeToggle />
                                </div>
                            </div>

                            <nav className="grid gap-2">
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        variants={itemVariants}
                                    >
                                        <Link
                                            to={item.id}
                                            spy={true}
                                            smooth={true}
                                            duration={800}
                                            offset={item.offset}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center p-3 rounded-xl transition-all duration-300 cursor-pointer ${activeSection === item.id
                                                    ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-medium transform scale-[1.02]'
                                                    : 'text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800'
                                                }`}
                                        >
                                            <span className={`mr-3 text-2xl ${activeSection === item.id ? 'transform scale-110' : ''
                                                }`}>
                                                {item.icon}
                                            </span>
                                            <span className="text-lg font-medium">{item.text}</span>

                                            {activeSection === item.id && (
                                                <motion.div
                                                    className="ml-auto w-1.5 h-5 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"
                                                    layoutId="activeIndicator"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.button
                                onClick={() => setIsOpen(false)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full mt-6 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-purple-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <span>Close Menu</span>
                                <HiX size={18} />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;