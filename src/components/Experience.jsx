import React, { useState } from 'react';
import { HiCode, HiDeviceMobile, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Experience = () => {
    const [expandedExperience, setExpandedExperience] = useState(null);

    const experiences = [
        {
            id: 1,
            title: "Associate Software Engineer",
            company: "MAQ Software",
            date: "Jan 2025 - Present",
            description: "Working as a Frontend Developer specializing in building modern web applications and interfaces using cutting-edge technologies.",
            responsibilities: [
                "Developing responsive web applications using React.js, TypeScript, and Angular",
                "Implementing UI components following design specifications and ensuring cross-browser compatibility",
                "Collaborating with backend developers to integrate RESTful APIs",
                "Participating in code reviews and implementing best practices for web development",
                "Working with technologies such as HTML, CSS, JavaScript, TypeScript, React, Angular, and ASP.NET"
            ],
            icon: <HiCode className="text-xl" />,
            color: "from-violet-500 to-purple-500",
            borderColor: "border-violet-500 dark:border-violet-400",
            textColor: "text-violet-600 dark:text-violet-300"
        },
        {
            id: 2,
            title: "Flutter Developer",
            company: "Hashtek Solutions",
            date: "July 2024 - Oct 2024",
            description: "Worked on cross-platform mobile application development using Flutter framework.",
            responsibilities: [
                "Designed and developed mobile applications using Flutter for both Android and iOS platforms",
                "Implemented state management solutions using Provider and Bloc patterns",
                "Integrated Firebase services including Authentication, Firestore, and Cloud Functions",
                "Collaborated with UI/UX designers to implement responsive and intuitive user interfaces",
                "Optimized application performance and fixed bugs to improve user experience"
            ],
            icon: <HiDeviceMobile className="text-xl" />,
            color: "from-blue-500 to-cyan-500",
            borderColor: "border-blue-500 dark:border-blue-400",
            textColor: "text-blue-600 dark:text-blue-300"
        }
    ];

    const toggleExpand = (id) => {
        setExpandedExperience(expandedExperience === id ? null : id);
    };

    return (
        <section id="experience" className="section bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="flex flex-col items-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                        Work Experience
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl">
                        My professional journey and the skills I've developed along the way.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto relative">
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                        />
                    </div>

                    <div className="md:hidden absolute left-5 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400"
                            initial={{ height: "0%" }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.1 }}
                        />
                    </div>

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="mb-16 last:mb-0">
                            <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5">
                                    <motion.div
                                        className={`w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 ${exp.borderColor} z-10`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    />
                                </div>

                                <div className="md:hidden absolute left-5 transform -translate-x-1/2 w-5 h-5">
                                    <motion.div
                                        className={`w-5 h-5 rounded-full bg-white dark:bg-gray-800 border-4 ${exp.borderColor} z-10`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                                        viewport={{ once: true, amount: 0.1 }}
                                    />
                                </div>

                                <motion.div
                                    className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white font-medium`}>
                                        {exp.date}
                                    </span>
                                </motion.div>

                                <motion.div
                                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                >
                                    <motion.div
                                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                                        whileHover={{ y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <div
                                            className={`p-6 cursor-pointer border-l-4 ${exp.borderColor}`}
                                            onClick={() => toggleExpand(exp.id)}
                                        >
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="flex items-center">
                                                        <div className={`mr-3 p-2 rounded-full bg-gradient-to-r ${exp.color}`}>
                                                            <span className="text-white">
                                                                {exp.icon}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                                                            <p className={`text-lg font-medium ${exp.textColor}`}>{exp.company}</p>
                                                        </div>
                                                    </div>

                                                    <div className="md:hidden mt-3 mb-3">
                                                        <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium`}>
                                                            {exp.date}
                                                        </span>
                                                    </div>

                                                    <p className="text-gray-600 dark:text-gray-300 mt-3">
                                                        {exp.description}
                                                    </p>
                                                </div>
                                                <div className="ml-3 text-gray-500 dark:text-gray-400">
                                                    {expandedExperience === exp.id ?
                                                        <HiChevronUp className="text-xl" /> :
                                                        <HiChevronDown className="text-xl" />
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: expandedExperience === exp.id ? "auto" : 0,
                                                opacity: expandedExperience === exp.id ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                                                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Key Responsibilities</h4>
                                                <ul className="space-y-3">
                                                    {exp.responsibilities.map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={expandedExperience === exp.id ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                                            className="flex items-start"
                                                        >
                                                            <div className={`mr-3 mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                                                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;