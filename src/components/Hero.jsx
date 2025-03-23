import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './ParticlesBackground';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { Toaster, toast } from 'react-hot-toast';
import AnimatedText from './AnimatedText';

const Hero = () => {
    const handleResumeClick = () => {
        toast.success('Downloading resume...');
    };

    return (
        <section id="home" className="relative w-full min-h-screen text-center overflow-hidden">
            <ParticlesBackground />
            <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center z-10 selection:bg-purple-200 selection:text-purple-900 dark:selection:bg-purple-800 dark:selection:text-purple-100 relative py-16">
                <Toaster position="top-center" />
                <motion.div
                    className="w-full max-w-4xl mx-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="font-mono text-xs md:text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-2 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Building digital experiences
                    </motion.p>

                    <motion.h1
                        className="text-center mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 dark:from-violet-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <AnimatedText
                            text="Arpit Verma"
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl justify-center font-bold"
                        />
                    </motion.h1>

                    <motion.div
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 h-14 flex items-center justify-center font-light text-gray-800 dark:text-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                2000,
                                'React Developer',
                                2000,
                                'Flutter Developer',
                                2000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            className="tracking-tight"
                        />
                    </motion.div>

                    <motion.p
                        className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-10 text-sm sm:text-base md:text-lg font-light leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        Creating exceptional digital experiences with modern frontend technologies
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                    >
                        <Link to="projects" smooth={true} duration={500} offset={-100}>
                            <motion.button
                                className="relative inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 overflow-hidden font-medium text-white transition-all duration-500 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 rounded-full group text-sm sm:text-base"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Projects
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </motion.button>
                        </Link>
                        <motion.a
                            href="./pdf/Arpit_Resume_Main_Final.pdf"
                            download
                            onClick={handleResumeClick}
                            className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 font-medium border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full space-x-2 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300 text-sm sm:text-base"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <HiDownload className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            <span className="text-sm sm:text-base">Resume</span>
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-center space-x-4 sm:space-x-6 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                    >
                        <motion.a
                            href="https://github.com/arpitboss"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2.5 sm:p-3.5 cursor-pointer text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[inset_0_2px_6px_rgba(0,0,0,0.08),0_1px_1px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_2px_6px_rgba(0,0,0,0.16),0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),0_1px_1px_rgba(255,255,255,0.2)] dark:hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.24),0_1px_1px_rgba(255,255,255,0.06)] hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                            whileHover={{ y: -3, scale: 1.1 }}
                            whileTap={{
                                scale: 0.9,
                                boxShadow: "inset 0 4px 10px rgba(0,0,0,0.15), 0 1px 1px rgba(255,255,255,0.1)"
                            }}
                            aria-label="GitHub Profile"
                        >
                            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/arpit-verma-545819226/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2.5 sm:p-3.5 cursor-pointer text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[inset_0_2px_6px_rgba(0,0,0,0.08),0_1px_1px_rgba(255,255,255,0.3)] dark:shadow-[inset_0_2px_6px_rgba(0,0,0,0.16),0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.12),0_1px_1px_rgba(255,255,255,0.2)] dark:hover:shadow-[inset_0_3px_8px_rgba(0,0,0,0.24),0_1px_1px_rgba(255,255,255,0.06)] hover:text-blue-500 dark:hover:text-blue-400 transition-all"
                            whileHover={{ y: -3, scale: 1.1 }}
                            whileTap={{
                                scale: 0.9,
                                boxShadow: "inset 0 4px 10px rgba(0,0,0,0.15), 0 1px 1px rgba(255,255,255,0.1)"
                            }}
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <Link
                        to="about"
                        smooth={true}
                        duration={800}
                        offset={-80}
                        aria-label="Scroll to About section"
                    >
                        <motion.div
                            className="cursor-pointer"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </motion.div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;