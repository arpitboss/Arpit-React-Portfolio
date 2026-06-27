import { motion } from 'framer-motion';
import TechTag from './TechTag';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const projects = [
  {
    title: 'Omnicontent AI',
    description: 'AI-powered SaaS platform that repurposes long-form video and audio into ready-to-publish assets for social media.',
    tech: ['Next.js', 'Express.js', 'MongoDB', 'RabbitMQ', 'Docker', 'Gemini API', 'Socket.io'],
    link: 'https://omnicontent-ai.arpitverma.me/',
    image: '/images/Omnicontent_AI.png',
  },
  {
    title: 'Doodle Deck',
    description: 'Multiplayer drawing and guessing game with real-time collaboration, live score updates, and persistent game state.',
    tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
    link: 'https://github.com/arpitboss/DoodleDeck',
    image: '/images/Doodle_Deck.png',
  },
  {
    title: 'Pet Adoption App',
    description: 'Mobile app connecting families with adoptable pets - featuring advanced search filters, offline browsing with Hive, and smooth custom animations.',
    tech: ['Flutter', 'Bloc', 'Hive', 'REST API'],
    link: 'https://github.com/arpitboss/Pet-Adoption-App',
    image: '/images/Pet_Adoption_App.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section section-border">
      <div className="container-prose text-center mb-16">
        <motion.h2
          className="text-h1 font-bold tracking-tight text-heading dark:text-dark-heading mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Projects
        </motion.h2>
        <motion.p 
          className="text-body dark:text-dark-body text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Things I've built and shipped.
        </motion.p>
      </div>

      <div className="container-wide">
        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col md:flex-row items-center gap-8 md:gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                id={`project-${index}`}
              >
                <div className={`w-full md:w-1/2 relative rounded-[2rem] overflow-hidden bg-bg-subtle dark:bg-dark-bg-subtle border border-border dark:border-dark-border shadow-sm group-hover:shadow-md group-hover:border-heading/20 dark:group-hover:border-dark-heading/20 transition-all duration-300 aspect-[4/3] sm:aspect-video ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                </div>

                <div className={`w-full md:w-1/2 flex flex-col text-center md:text-left px-4 md:px-0 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="font-sans text-2xl md:text-3xl font-bold text-heading dark:text-dark-heading mb-4 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-body dark:text-dark-body text-base md:text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {project.tech.map((t) => (
                      <TechTag key={t} name={t} variant="pill" />
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <a
            href="https://github.com/arpitboss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-heading dark:bg-dark-heading text-white dark:text-dark-bg text-sm font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200 shadow-sm"
            id="projects-github-link"
          >
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;