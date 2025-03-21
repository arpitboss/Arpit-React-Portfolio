import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex justify-center mb-16"
                >
                    <h2 className="relative inline-block text-4xl font-bold mb-4 text-gray-800 dark:text-white after:content-[''] after:block after:absolute after:-bottom-3 after:left-1/4 after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-6">
                            Passionate Developer, Innovative Problem Solver
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            My journey in web development began with a curiosity about how websites work, which quickly evolved into a passion for building them.
                            I enjoy solving complex problems and transforming ideas into reality through code.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            With expertise in React.js, JavaScript, and modern frontend frameworks, I specialize in developing responsive web applications
                            that deliver exceptional user experiences across all devices. I'm also experienced with Flutter for cross-platform mobile development.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                            When I'm not coding, I'm continuously learning about emerging technologies and best practices to stay at the forefront of web development.
                            I believe in clean, maintainable code and user-centered design principles.
                        </p>

                        <motion.div
                            className="pt-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-md hover:shadow-lg transform transition hover:-translate-y-1 relative overflow-hidden group"
                            >
                                <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                                <span className="relative flex items-center">
                                    Get In Touch
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-8">
                            My Approach
                        </h3>

                        <div className="space-y-8">
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">User-Centered Design</h4>
                                <p className="text-gray-700 dark:text-gray-300">I believe that successful applications begin and end with the user's needs. I prioritize intuitive interfaces and smooth interactions to create experiences that feel natural and effortless.</p>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Clean & Maintainable Code</h4>
                                <p className="text-gray-700 dark:text-gray-300">I write code that not only works today but remains maintainable for the future. By following best practices and design patterns, I ensure scalability and readability.</p>
                            </motion.div>

                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Continuous Learning</h4>
                                <p className="text-gray-700 dark:text-gray-300">Technology evolves quickly, and I evolve with it. I stay current with emerging tools and techniques, constantly refining my skills to deliver cutting-edge solutions.</p>
                            </motion.div>
                        </div>

                        <motion.div
                            className="pt-4 flex justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="#skills"
                                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10 text-purple-600 dark:text-purple-400 font-medium shadow-sm hover:shadow-md transition"
                            >
                                <span className="relative flex items-center">
                                    View My Technical Skills
                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;