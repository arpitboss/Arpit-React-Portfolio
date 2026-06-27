import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => {
  return (
    <section id="about" className="section section-border">
      <div className="container-prose">
        <motion.h2
          className="text-h2 mb-8 dark:text-dark-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          About
        </motion.h2>

        <motion.div
          className="space-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.p className="leading-relaxed text-body dark:text-dark-body" variants={fadeUp}>
            I'm a software engineer who enjoys working across the full stack - from designing 
            secure APIs and asynchronous job pipelines to building interfaces that feel fast and 
            intentional. I care about writing code that's easy to read, easy to change, and does 
            exactly what it should.
          </motion.p>

          <motion.p className="leading-relaxed text-body dark:text-dark-body" variants={fadeUp}>
            Currently at MAQ Software, I work on the Origence project - identifying backend 
            vulnerabilities, building scalable RESTful APIs, and debugging the kind of issues 
            that keep systems running reliably. Before that, I studied Computer Science at 
            Ajay Kumar Garg Engineering College, where I spent most of my free time building 
            side projects and competing on LeetCode and CodeChef.
          </motion.p>

          <motion.p className="leading-relaxed text-body dark:text-dark-body" variants={fadeUp}>
            My recent work includes an AI-powered content repurposing platform (RabbitMQ, 
            Gemini API, WebSockets), a multiplayer drawing game built with Flutter and Socket.io, 
            and a pet adoption app with offline-first architecture. I like problems that sit at 
            the intersection of systems design and user experience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;