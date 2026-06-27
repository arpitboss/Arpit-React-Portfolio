import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Send, FileText, MapPin, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Hero = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="container-prose pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-xl">
        <motion.h1
          className="text-h1 font-display font-bold text-heading dark:text-dark-heading tracking-tight mb-4"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          arpit verma
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-body dark:text-dark-body mb-4"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Software Engineer at{' '}
          <span className="text-heading dark:text-dark-heading font-medium">MAQ Software</span>
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-3 text-sm text-muted dark:text-dark-muted mb-8"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="flex items-center gap-1.5 bg-bg-subtle dark:bg-dark-bg-subtle border border-border dark:border-dark-border px-3 py-1.5 rounded-full text-heading dark:text-dark-heading shadow-sm">
            <MapPin size={14} className="text-muted dark:text-dark-muted" /> Greater Noida, India
          </span>
          {time && (
            <span className="flex items-center gap-1.5 text-muted dark:text-dark-muted">
              <Clock size={14} /> {time}
            </span>
          )}
        </motion.div>

        <motion.p
          className="text-body dark:text-dark-body leading-relaxed mb-10 max-w-md"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          I build clean, reliable backend systems. My focus is on scalable APIs, real-time architectures, and robust services using Node.js, modern databases, and event-driven patterns.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-3 mb-10"
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-heading dark:bg-dark-heading text-white dark:text-dark-bg text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 shadow-sm"
            id="hero-cta-contact"
          >
            <Send size={16} /> Get in touch
          </a>
          <a
            href="/pdf/Arpit_Resume__Main.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg dark:bg-dark-bg-subtle border border-border dark:border-dark-border text-heading dark:text-dark-heading text-sm font-medium rounded-xl hover:bg-bg-subtle dark:hover:bg-dark-bg-hover transition-colors duration-200 shadow-sm"
            id="hero-cta-resume"
          >
            <FileText size={16} className="text-muted dark:text-dark-muted" /> Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-5"
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <a
            href="https://github.com/arpitboss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors duration-200"
            aria-label="GitHub"
            id="hero-social-github"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/arpit-verma-545819226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors duration-200"
            aria-label="LinkedIn"
            id="hero-social-linkedin"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://x.com/ArpitVerma_123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors duration-200"
            aria-label="Twitter"
            id="hero-social-twitter"
          >
            <FaTwitter size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;