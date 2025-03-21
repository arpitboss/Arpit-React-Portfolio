import React from 'react';
import { motion } from 'framer-motion';
import { DiReact, DiJavascript1, DiHtml5, DiCss3 } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiFlutter, SiFirebase, SiMongodb, SiMysql, SiGit, SiAndroidstudio, SiPostman } from 'react-icons/si';
import { FaGithub, FaDatabase } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        {
            name: 'React',
            icon: <DiReact />,
            color: 'text-blue-500',
            bgLight: 'from-blue-50 to-blue-100',
            bgDark: 'from-blue-900/20 to-blue-800/20',
            borderLight: 'border-blue-200',
            borderDark: 'dark:border-blue-700'
        },
        {
            name: 'JavaScript',
            icon: <DiJavascript1 />,
            color: 'text-yellow-400',
            bgLight: 'from-yellow-50 to-yellow-100',
            bgDark: 'from-yellow-900/20 to-yellow-800/20',
            borderLight: 'border-yellow-200',
            borderDark: 'dark:border-yellow-700'
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript />,
            color: 'text-blue-600',
            bgLight: 'from-blue-50 to-indigo-100',
            bgDark: 'from-blue-900/20 to-indigo-800/20',
            borderLight: 'border-blue-200',
            borderDark: 'dark:border-blue-700'
        },
        {
            name: 'HTML5',
            icon: <DiHtml5 />,
            color: 'text-orange-500',
            bgLight: 'from-orange-50 to-orange-100',
            bgDark: 'from-orange-900/20 to-orange-800/20',
            borderLight: 'border-orange-200',
            borderDark: 'dark:border-orange-700'
        },
        {
            name: 'CSS3',
            icon: <DiCss3 />,
            color: 'text-blue-400',
            bgLight: 'from-blue-50 to-sky-100',
            bgDark: 'from-blue-900/20 to-sky-800/20',
            borderLight: 'border-blue-200',
            borderDark: 'dark:border-sky-700'
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss />,
            color: 'text-cyan-400',
            bgLight: 'from-cyan-50 to-cyan-100',
            bgDark: 'from-cyan-900/20 to-cyan-800/20',
            borderLight: 'border-cyan-200',
            borderDark: 'dark:border-cyan-700'
        },
        {
            name: 'Flutter',
            icon: <SiFlutter />,
            color: 'text-blue-300',
            bgLight: 'from-blue-50 to-cyan-100',
            bgDark: 'from-blue-900/20 to-cyan-800/20',
            borderLight: 'border-blue-200',
            borderDark: 'dark:border-cyan-700'
        },
        {
            name: 'Firebase',
            icon: <SiFirebase />,
            color: 'text-yellow-500',
            bgLight: 'from-yellow-50 to-amber-100',
            bgDark: 'from-yellow-900/20 to-amber-800/20',
            borderLight: 'border-yellow-200',
            borderDark: 'dark:border-amber-700'
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb />,
            color: 'text-green-500',
            bgLight: 'from-green-50 to-green-100',
            bgDark: 'from-green-900/20 to-green-800/20',
            borderLight: 'border-green-200',
            borderDark: 'dark:border-green-700'
        },
        {
            name: 'MySQL',
            icon: <SiMysql />,
            color: 'text-blue-600',
            bgLight: 'from-blue-50 to-blue-100',
            bgDark: 'from-blue-900/20 to-blue-800/20',
            borderLight: 'border-blue-200',
            borderDark: 'dark:border-blue-700'
        },
        {
            name: 'Git',
            icon: <FaGithub />,
            color: 'text-gray-700',
            bgLight: 'from-gray-50 to-gray-100',
            bgDark: 'from-gray-800/40 to-gray-700/40',
            borderLight: 'border-gray-200',
            borderDark: 'dark:border-gray-600'
        },
        {
            name: 'Android Studio',
            icon: <SiAndroidstudio />,
            color: 'text-green-600',
            bgLight: 'from-green-50 to-teal-100',
            bgDark: 'from-green-900/20 to-teal-800/20',
            borderLight: 'border-green-200',
            borderDark: 'dark:border-teal-700'
        },
        {
            name: 'Postman',
            icon: <SiPostman />,
            color: 'text-orange-500',
            bgLight: 'from-orange-50 to-orange-100',
            bgDark: 'from-orange-900/20 to-orange-800/20',
            borderLight: 'border-orange-200',
            borderDark: 'dark:border-orange-700'
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex justify-center mb-16"
                >
                    <h2 className="relative inline-block text-4xl font-bold mb-4 text-gray-800 dark:text-white after:content-[''] after:block after:absolute after:-bottom-3 after:left-1/4 after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:rounded-full">
                        Technical Skills
                    </h2>
                </motion.div>

                <div className="mb-12">
                    <motion.p
                        className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        I've developed expertise in a range of technologies that enable me to build full-stack applications
                        with modern architectures. Here are the key technologies and tools I work with:
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`relative bg-gradient-to-br ${skill.bgLight} dark:${skill.bgDark} rounded-xl shadow-md border ${skill.borderLight} ${skill.borderDark} p-5 flex flex-col items-center justify-center hover:shadow-lg transition-all backdrop-blur-sm overflow-hidden group`}
                            variants={item}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -right-8 -top-8 w-16 h-16 bg-gradient-to-br from-white/40 to-transparent dark:from-white/10 rounded-full blur-md"></div>
                            <div className={`text-5xl mb-3 ${skill.color} transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                                {skill.icon}
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 font-medium text-lg">
                                {skill.name}
                            </p>
                            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 rounded-full blur-md"></div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-16 flex flex-col items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl shadow-md border border-purple-100 dark:border-purple-800/30 max-w-3xl">
                        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-3">Always Learning</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            My tech stack is constantly evolving as I explore new technologies and frameworks.
                            I'm currently learning more about Web3 technologies, advanced animation techniques, and serverless architectures.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;