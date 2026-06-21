import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="section section-border">
      <div className="container-prose">
        <motion.h2
          className="text-h2 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Get in touch
        </motion.h2>

        <motion.p
          className="text-body leading-relaxed mb-8 max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          I'm always open to interesting conversations, new opportunities, or 
          just a quick hello. Drop me a line anytime.
        </motion.p>

        <motion.a
          href="mailto:contact@arpitverma.me"
          className="inline-flex items-center px-5 py-2.5 bg-heading text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          id="contact-email-cta"
        >
          contact@arpitverma.me
        </motion.a>

        <motion.div
          className="flex items-center gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <a
            href="https://github.com/arpitboss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-heading transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/arpit-verma-545819226"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-heading transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://x.com/ArpitVerma_123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-heading transition-colors duration-200"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;