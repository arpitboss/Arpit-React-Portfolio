import React from 'react';
import { motion } from 'framer-motion';
import { BiLinkExternal, BiCodeAlt } from 'react-icons/bi';

const ProjectCard = ({ title, description, image, tech, liveLink, repoLink }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{ y: -10 }}
        >
            <div className="relative h-48 overflow-hidden group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex space-x-3">
                        {repoLink && (
                            <a
                                href={repoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                            >
                                <BiCodeAlt size={20} />
                            </a>
                        )}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-colors"
                            >
                                <BiLinkExternal size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {tech.map((item, index) => {
                        let bgColor = "";

                        if (item.toLowerCase().includes("react")) {
                            bgColor = "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400";
                        } else if (item.toLowerCase().includes("node")) {
                            bgColor = "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
                        } else if (item.toLowerCase().includes("mongo")) {
                            bgColor = "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";
                        } else if (item.toLowerCase().includes("firebase")) {
                            bgColor = "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400";
                        } else if (item.toLowerCase().includes("tailwind")) {
                            bgColor = "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400";
                        } else if (item.toLowerCase().includes("redux")) {
                            bgColor = "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400";
                        } else if (item.toLowerCase().includes("express")) {
                            bgColor = "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
                        } else if (item.toLowerCase().includes("stripe")) {
                            bgColor = "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400";
                        } else if (item.toLowerCase().includes("socket")) {
                            bgColor = "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400";
                        } else if (item.toLowerCase().includes("google")) {
                            bgColor = "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
                        } else {
                            bgColor = "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
                        }

                        return (
                            <span
                                key={index}
                                className={`${bgColor} px-3 py-1 text-sm rounded-full font-medium`}
                            >
                                {item}
                            </span>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: 'Smart Travel Planner',
            description: 'An intelligent travel planning application with personalized itineraries, budget tracking, and location recommendations.',
            image: './images/Smart_Travel_Planner.png',
            tech: ['React', 'Tailwind CSS'],
            liveLink: 'https://voyage-planner-pro.netlify.app/',
            repoLink: 'https://github.com/arpitboss/travel-planner'
        },
        {
            title: 'TaskMaster Pro',
            description: 'A comprehensive task management app with drag-and-drop functionality, priority settings, and category organization.',
            image: './images/Task_Master_Pro.png',
            tech: ['React', 'Redux', 'Chart.js', 'Tailwind CSS'],
            liveLink: 'https://todo-master-pro.netlify.app/',
            repoLink: 'https://github.com/arpitboss/task-master'
        },
        {
            title: 'SkyVision Drones',
            description: 'E-commerce platform for professional drones with detailed product specifications and comparison tools.',
            image: './images/SkyVision_Drones.png',
            tech: ['React', 'Tailwind CSS'],
            liveLink: 'https://skyvision-drones.netlify.app/',
            repoLink: 'https://github.com/arpitboss/skyvision'
        },
        {
            title: 'EventPro',
            description: 'Event management platform with features for event creation, ticketing, attendee management, and post-event analytics.',
            image: './images/Event_Pro.png',
            tech: ['React', 'Tailwind CSS'],
            liveLink: 'https://events-manager-pro.netlify.app/',
            repoLink: 'https://github.com/arpitboss/event-pro'
        },
        {
            title: 'WebChat Pro',
            description: 'Real-time messaging application with direct messaging, group chats, file sharing, and read receipts.',
            image: './images/WebChat_Pro.png',
            tech: ['React', 'Socket.io', 'Tailwind CSS'],
            liveLink: 'https://webchat-pro.netlify.app/',
            repoLink: 'https://github.com/arpitboss/webchat-pro'
        }
    ];

    return (
        <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
            <div className="container z-10 relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex justify-center mb-12"
                >
                    <h2 className="section-title relative inline-block text-3xl font-bold mb-8 text-gray-800 dark:text-white after:content-[''] after:block after:w-full after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/arpitboss"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gray-800 dark:bg-white text-white dark:text-gray-800 font-medium hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
                    >
                        View More Projects on GitHub
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;