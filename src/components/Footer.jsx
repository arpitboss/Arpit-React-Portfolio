import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    { icon: <FaGithub />, url: "#", label: "GitHub" },
    { icon: <FaLinkedinIn />, url: "#", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaEnvelope />, url: "#", label: "Email" }
];

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-12 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-2xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold mb-4 font-display bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-400 dark:to-pink-500 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Arpit Verma
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 dark:text-gray-300 mb-6 font-body"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Frontend Developer
                    </motion.p>

                    <motion.div
                        className="flex justify-center space-x-4 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 hover:text-white transition-all duration-300"
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.div
                        className="border-t border-gray-200 dark:border-gray-800 pt-6 mt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-500 dark:text-gray-400 font-body text-sm">
                            © {new Date().getFullYear()} Arpit Verma. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
        </footer>
    );
};

export default Footer;