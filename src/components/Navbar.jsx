import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const blinkStyle = {
    '@keyframes blink': {
        '0%': { opacity: 0 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0 }
    },
    '.blinkit': {
        animation: 'blink 1.5s infinite ease-in-out'
    }
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const menuRef = useRef(null);
    const headerRef = useRef(null);

    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 50], [1, 0.98]);
    const headerScale = useTransform(scrollY, [0, 50], [1, 0.98]);

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

    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0% { opacity: 0; }
                50% { opacity: 1; }
                100% { opacity: 0; }
            }
            .blinkit {
                animation: blink 1.5s infinite ease-in-out;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

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
        <motion.header
            ref={headerRef}
            style={{
                opacity: headerOpacity,
                scale: headerScale
            }}
            className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                ? 'py-2 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 shadow-lg shadow-purple-500/5 border-gray-100/50 dark:border-gray-800/50'
                : 'py-4 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative group"
                        >
                            <div className="flex items-center">
                                <div className="relative w-10 h-10 overflow-hidden">
                                    <motion.svg
                                        width="40"
                                        height="30"
                                        viewBox="0 0 90 71"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <rect x="6" y="10" width="35" height="52" className="fill-black dark:fill-white" />
                                        <path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" className="fill-gray-100 dark:fill-gray-800" />
                                        <rect className="blinkit fill-black dark:fill-white" x="45" y="44" width="29" height="8" />
                                    </motion.svg>
                                    {isScrolled && (
                                        <motion.div
                                            className="absolute inset-0 rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </div>
                            </div>
                            <motion.div
                                className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </Link>

                    <div className="hidden md:flex items-center space-x-2">
                        <nav className="flex items-center p-1 bg-gray-50 dark:bg-gray-800/50 rounded-full shadow-inner">
                            {navItems.map((item) => (
                                <motion.div key={item.id} className="relative">
                                    <Link
                                        to={item.id}
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={item.offset}
                                        activeClass="active"
                                        className="relative"
                                    >
                                        <motion.div
                                            className={`px-4 py-2 rounded-full flex items-center transition-all duration-200 cursor-pointer ${activeSection === item.id
                                                ? 'text-white'
                                                : 'text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                                                }`}
                                            whileHover={{
                                                scale: activeSection !== item.id ? 1.05 : 1,
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {activeSection === item.id && (
                                                <motion.div
                                                    layoutId="navBackground"
                                                    className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full shadow-md shadow-purple-500/20"
                                                    initial={false}
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <motion.span
                                                className={`mr-1.5 z-10 transition-transform duration-300 ${activeSection === item.id ? 'transform scale-110' : ''
                                                    }`}
                                            >
                                                {item.icon}
                                            </motion.span>
                                            <motion.span className="font-medium relative z-10">
                                                {item.text}
                                            </motion.span>
                                        </motion.div>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="flex items-center ml-3">
                            <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-full shadow-inner">
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
                        <div className="mt-2 backdrop-blur-2xl bg-white/95 dark:bg-gray-900/95 px-4 py-5 shadow-xl shadow-purple-500/10 rounded-b-3xl mx-4 mb-6">
                            <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
                                <div className="flex items-center space-x-3">

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
                                            duration={500}
                                            offset={item.offset}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center p-3 rounded-xl transition-all duration-300 cursor-pointer ${activeSection === item.id
                                                ? 'bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:from-violet-900/30 dark:to-purple-900/30 text-purple-600 dark:text-purple-400 font-medium'
                                                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/60'
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
        </motion.header>
    );
};

export default Navbar;