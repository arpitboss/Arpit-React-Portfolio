import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const About = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true, amount: 0.3 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative py-28 overflow-hidden"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"></div>
                <motion.div
                    style={{ opacity: backgroundOpacity }}
                    className="absolute -top-32 -right-32 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    style={{ opacity: backgroundOpacity }}
                    className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink-400/20 dark:bg-pink-600/20 rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    ref={headingRef}
                    className="flex flex-col items-center mb-20"
                >
                    <motion.span
                        className="text-sm font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to my world
                    </motion.span>

                    <motion.h2
                        className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Me</span>
                    </motion.h2>

                    <motion.div
                        className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={isHeadingInView ? { opacity: 1, scaleX: 1 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    ></motion.div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <LeftColumn />
                    <RightColumn />
                </div>
            </div>
        </section>
    );
};

const LeftColumn = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.div
            ref={ref}
            className="lg:col-span-5 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400"
            >
                Creative Developer & Problem Solver
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                My journey in web development began with curiosity, which evolved into a passion for crafting meaningful digital experiences. I thrive on solving complex problems and bringing creative ideas to life through clean, efficient code.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                With expertise in React.js, JavaScript, and modern frontend frameworks, I build responsive web applications that deliver exceptional user experiences across all devices. My experience extends to Flutter for creating seamless cross-platform mobile solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Beyond coding, I'm committed to continuous learning—exploring emerging technologies and best practices to stay at the cutting edge of web development. I believe in the power of clean architecture and user-centered design to create lasting digital impact.
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="pt-8"
            >
                <a
                    href="#contact"
                    className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full text-white font-medium shadow-inner"
                    style={{
                        background: 'linear-gradient(to right, #9333ea, #db2777)',
                        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.3), 0 2px 3px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-all duration-300 ease-out"></span>
                    <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100"
                        style={{
                            boxShadow: 'inset 0 0 15px rgba(255, 255, 255, 0.3)',
                            transition: 'opacity 0.3s ease'
                        }}></span>
                    <span className="relative flex items-center">
                        Let's Connect
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </span>
                </a>
            </motion.div>
        </motion.div>
    );
};

const RightColumn = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const cards = [
        {
            title: "User-Centered Design",
            description: "Creating intuitive interfaces that place users at the heart of every design decision. I build experiences that feel natural, accessible, and delightful.",
            delay: 0.2,
            icon: (
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: "Clean & Scalable Code",
            description: "I write code that's not just effective today but remains maintainable for the future. Through thoughtful architecture and best practices, I ensure scalability and longevity.",
            delay: 0.3,
            icon: (
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            )
        },
        {
            title: "Continuous Growth",
            description: "The tech landscape evolves rapidly, and I evolve with it. I embrace lifelong learning, constantly refining my skills to deliver innovative solutions on the cutting edge.",
            delay: 0.4,
            icon: (
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        }
    ];

    return (
        <motion.div
            ref={ref}
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
        >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-10">
                My Approach
            </h3>

            <div className="space-y-6">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-700 p-6 transition-all duration-300"
                        style={{
                            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(255, 255, 255, 0.1)'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: card.delay }}
                        whileHover={{
                            y: -5,
                            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(147, 51, 234, 0.1)',
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl group-hover:bg-purple-200 dark:group-hover:bg-purple-800/30 transition-colors duration-300"
                                style={{
                                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)'
                                }}>
                                {card.icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                                    {card.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="pt-8 flex justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <a
                    href="#skills"
                    className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300"
                    style={{
                        background: 'linear-gradient(145deg, #f0f0f0, #e6e6e6)',
                        color: '#9333ea',
                        boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(255, 255, 255, 0.7)'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 0 3px 7px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(255, 255, 255, 0.5)';
                        e.currentTarget.style.transform = 'translateY(1px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(255, 255, 255, 0.7)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <span className="flex items-center">
                        Explore My Skills
                        <svg className="w-5 h-5 ml-2 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </a>
            </motion.div>
        </motion.div>
    );
};

export default About;