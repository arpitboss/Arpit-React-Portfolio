import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

export default function Contact() {
    const form = useRef();
    const controls = useAnimation();

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_0w3xhll',
            'template_nltgu1n',
            form.current,
            'KOM2zOpL0WEd30MN5'
        ).then(
            () => {
                alert('Message successfully sent!');
                form.current.reset();
            },
            (error) => alert('Failed to send message: ' + error.text)
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

    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto"
                    animate={controls}
                >
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent">
                        Let's Collaborate
                    </h2>

                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-gray-900/30 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 border border-gray-100 dark:border-gray-700">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <motion.div
                                    className="space-y-6"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <ContactItem
                                        icon={<FiMapPin className="text-2xl text-purple-500 dark:text-purple-400" />}
                                        title="Based in"
                                        value="Ghaziabad, India"
                                    />
                                    <ContactItem
                                        icon={<FiMail className="text-2xl text-purple-500 dark:text-purple-400" />}
                                        title="Email"
                                        value="workother001@gmail.com"
                                        href="mailto:workother001@gmail.com"
                                    />
                                    <ContactItem
                                        icon={<FiPhone className="text-2xl text-purple-500 dark:text-purple-400" />}
                                        title="Phone"
                                        value="+91 7678607016"
                                    />
                                </motion.div>

                                <motion.div
                                    className="flex space-x-6 mt-12"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <SocialLink
                                        href="https://github.com/arpitboss"
                                        icon={<FaGithub className="text-2xl" />}
                                        label="GitHub"
                                        hoverColor="hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-gray-800"
                                    />
                                    <SocialLink
                                        href="https://linkedin.com/in/arpit-verma-545819226"
                                        icon={<FaLinkedinIn className="text-2xl" />}
                                        label="LinkedIn"
                                        hoverColor="hover:bg-blue-600 hover:text-white dark:hover:bg-white dark:hover:text-blue-600"
                                    />
                                </motion.div>
                            </div>

                            <motion.form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <div className="space-y-4">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            name="user_name"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 outline-none border border-gray-200 dark:border-gray-600 transition-all"
                                            required
                                        />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="user_email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 outline-none border border-gray-200 dark:border-gray-600 transition-all"
                                            required
                                        />
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                    </div>
                                    <div className="relative group">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows="5"
                                            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-400 outline-none border border-gray-200 dark:border-gray-600 transition-all resize-none"
                                            required
                                        ></textarea>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                                    </div>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 dark:from-purple-500 dark:via-fuchsia-500 dark:to-pink-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all relative overflow-hidden group hover-effect"
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 10px 25px -5px rgba(147, 51, 234, 0.5), 0 8px 10px -6px rgba(236, 72, 153, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.98 }}
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
    <div className="flex items-start gap-4 group">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{title}</p>
            {href ? (
                <a href={href} className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors text-lg hover-effect">
                    {value}
                </a>
            ) : (
                <p className="text-gray-800 dark:text-gray-200 text-lg">{value}</p>
            )}
        </div>
    </div>
);

const SocialLink = ({ href, icon, label, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`w-12 h-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 transition-all duration-300 ${hoverColor} hover-effect`}
    >
        {icon}
    </a>
);