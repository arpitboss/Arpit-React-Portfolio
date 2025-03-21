import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, tech, githubLink, liveLink, index }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-transparent dark:border-gray-700 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -10 }}
        >
            <div className="relative overflow-hidden h-52 group">
                <motion.img
                    src={image || "/api/placeholder/800/500"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <div className="w-full flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">{title}</h3>
                        <div className="flex space-x-3">
                            {githubLink && (
                                <motion.a
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-gray-800/70 hover:bg-gray-900 p-2 rounded-full backdrop-blur-sm"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="View GitHub repository"
                                >
                                    <FaGithub className="text-lg" />
                                </motion.a>
                            )}
                            {liveLink && (
                                <motion.a
                                    href={liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white bg-primary-light/70 dark:bg-primary-dark/70 hover:bg-primary-light dark:hover:bg-primary-dark p-2 rounded-full backdrop-blur-sm"
                                    whileHover={{ scale: 1.2, rotate: -10 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="View live site"
                                >
                                    <FaExternalLinkAlt className="text-lg" />
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white font-display">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-body">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <motion.span
                            key={index}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-1 rounded"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
                <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-light dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary-light font-medium transition-colors duration-300"
                    whileHover={{ x: 5 }}
                >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </motion.a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;