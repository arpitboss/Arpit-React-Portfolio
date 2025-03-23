import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

export default function Contact() {
    const form = useRef();
    const controls = useAnimation();
    const [toast, setToast] = useState({ visible: false, message: '', type: '' });

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleColorSchemeChange = () => {
            controls.start({
                opacity: [0, 1],
                transition: { duration: 0.5 }
            });
        };

        darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);
        return () => darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange);
    }, [controls]);

    const showToast = (message, type = 'success') => {
        setToast({ visible: true, message, type });

        setTimeout(() => {
            setToast(prev => ({ ...prev, visible: false }));
        }, 4000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_0w3xhll',
            'template_nltgu1n',
            form.current,
            'KOM2zOpL0WEd30MN5'
        ).then(
            () => {
                showToast('Message successfully sent!', 'success');
                form.current.reset();
            },
            (error) => showToast(`Failed to send message: ${error.text}`, 'error')
        );
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const toastVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <AnimatePresence>
                {toast.visible && (
                    <motion.div
                        className={`fixed top-6 right-6 z-50 px-4 py-3 rounded-lg flex items-center space-x-2 ${toast.type === 'success'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                            : 'bg-gradient-to-r from-red-500 to-rose-500 text-white'
                            }`}
                        style={{
                            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.2)'
                        }}
                        variants={toastVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <span className={`text-lg ${toast.type === 'success' ? '✅' : '❌'}`}></span>
                        <p className="font-medium">{toast.message}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto"
                    animate={controls}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
                        Let's Collaborate
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-100 dark:border-gray-700"
                        style={{
                            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)'
                        }}>
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
                            <div className="space-y-6 sm:space-y-8">
                                <motion.div
                                    className="space-y-4 sm:space-y-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <ContactItem
                                        icon={<FiMapPin className="text-xl sm:text-2xl text-purple-500 dark:text-purple-400" />}
                                        title="Based in"
                                        value={<span className="text-gray-700 dark:text-gray-300 text-sm">Ghaziabad, India</span>}
                                    />
                                    <ContactItem
                                        icon={<FiMail className="text-xl sm:text-2xl text-purple-500 dark:text-purple-400" />}
                                        title="Email"
                                        value={<span className="text-sm">workother001@gmail.com</span>}
                                        href="mailto:workother001@gmail.com"
                                    />
                                    <ContactItem
                                        icon={<FiPhone className="text-xl sm:text-2xl text-purple-500 dark:text-purple-400" />}
                                        title="Phone"
                                        value={<span className="text-gray-700 dark:text-gray-300 text-sm">+91 7678607016</span>}
                                    />

                                </motion.div>

                                <motion.div
                                    className="flex space-x-4 sm:space-x-6 mt-8 sm:mt-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <SocialLink
                                        href="https://github.com/arpitboss"
                                        icon={<FaGithub className="text-xl sm:text-2xl" />}
                                        label="GitHub"
                                        hoverColor="hover:text-white dark:hover:text-gray-800"
                                        lightBg="bg-gray-100"
                                        darkBg="dark:bg-gray-700"
                                        hoverBg="hover:bg-gray-800 dark:hover:bg-white"
                                    />
                                    <SocialLink
                                        href="https://linkedin.com/in/arpit-verma-545819226"
                                        icon={<FaLinkedinIn className="text-xl sm:text-2xl" />}
                                        label="LinkedIn"
                                        hoverColor="hover:text-white dark:hover:text-blue-600"
                                        lightBg="bg-gray-100"
                                        darkBg="dark:bg-gray-700"
                                        hoverBg="hover:bg-blue-600 dark:hover:bg-white"
                                    />
                                </motion.div>
                            </div>

                            <motion.form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-4 sm:space-y-6 w-full"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="space-y-3 sm:space-y-4 w-full">
                                    <div className="relative group w-full">
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Your Name"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-all text-sm sm:text-base"
                                            style={{
                                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                                                border: '1px solid rgba(209, 213, 219, 0.5)'
                                            }}
                                            required
                                        />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                    </div>
                                    <div className="relative group w-full">
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="Your Email"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-all text-sm sm:text-base"
                                            style={{
                                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                                                border: '1px solid rgba(209, 213, 219, 0.5)'
                                            }}
                                            required
                                        />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                    </div>
                                    <div className="relative group w-full">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows="4"
                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-all resize-none text-sm sm:text-base"
                                            style={{
                                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
                                                border: '1px solid rgba(209, 213, 219, 0.5)'
                                            }}
                                            required
                                        ></textarea>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                    </div>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full text-white py-3 sm:py-4 rounded-lg font-medium sm:font-semibold relative overflow-hidden group hover-effect text-sm sm:text-base"
                                    style={{
                                        background: 'linear-gradient(to right, #9333ea, #ec4899)',
                                        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(255, 255, 255, 0.1)'
                                    }}
                                    whileHover={{
                                        boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(236, 72, 153, 0.2)"
                                    }}
                                    whileTap={{
                                        scale: 0.98,
                                        boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.4)"
                                    }}
                                >
                                    <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
                                    <span className="relative">Send Message</span>
                                </motion.button>
                            </motion.form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

const ContactItem = ({ icon, title, value, href }) => (
    <div className="flex items-start gap-3 sm:gap-4 group">
        <div className="p-2 sm:p-3 rounded-full text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 group-hover:scale-110 transition-transform"
            style={{
                boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
            }}>
            {icon}
        </div>
        <div>
            <h3 className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{title}</h3>
            {href ? (
                <a
                    href={href}
                    className="text-gray-900 dark:text-white font-medium sm:font-semibold text-base sm:text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                    {value}
                </a>
            ) : (
                <p className="text-gray-900 dark:text-white font-medium sm:font-semibold text-base sm:text-lg">{value}</p>
            )}
        </div>
    </div>
);

const SocialLink = ({ href, icon, label, hoverColor, lightBg, darkBg, hoverBg }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center rounded-full transition-all duration-300 ${lightBg} ${darkBg} text-gray-600 dark:text-gray-300 ${hoverColor} ${hoverBg}`}
        style={{
            boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
    >
        {icon}
    </a>
);