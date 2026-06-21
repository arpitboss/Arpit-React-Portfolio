import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const experiences = [
  {
    company: 'MAQ Software',
    role: 'Software Engineer-1',
    period: 'Aug 2025 - Present',
    location: 'Greater Noida',
    logo: '/images/MAQ_Logo.png',
    current: true,
    description: [
      'Contributing to the Origence project, identifying and resolving backend vulnerabilities to improve application security and performance',
      'Designing and implementing secure, scalable RESTful APIs with proper authentication, authorization, and data validation',
      'Debugging and resolving critical backend issues, improving system uptime and client satisfaction',
    ],
    tech: ['Node.js', 'TypeScript', 'ASP.NET', 'REST APIs'],
  },
  {
    company: 'Hashtek Solutions',
    role: 'Flutter Developer',
    period: 'Jul 2024 - Oct 2024',
    location: 'Remote',
    logo: '/images/HashTek_Logo.png',
    current: false,
    description: [
      'Designed and developed cross-platform mobile apps for Android and iOS',
      'Implemented state management with Provider and Bloc patterns',
      'Integrated Firebase services including Auth, Firestore, and Cloud Functions',
      'Collaborated closely with designers on responsive, intuitive interfaces',
    ],
    tech: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Bloc'],
  },
];

const education = {
  institution: 'Ajay Kumar Garg Engineering College',
  degree: 'B.Tech in Computer Science and Engineering',
  period: '2021 - 2025',
  location: 'Ghaziabad, India',
};

const Experience = () => {
  return (
    <section id="experience" className="section section-border">
      <div className="container-prose">
        <motion.h2
          className="text-h2 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col sm:flex-row gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {/* Logo Box */}
              <motion.div variants={fadeUp} className="shrink-0 mt-1">
                <div className="w-12 h-12 rounded-xl border border-border bg-white shadow-sm flex items-center justify-center overflow-hidden p-1.5">
                  <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 pb-10 border-b border-border/60 last:border-0 last:pb-0">
                <motion.div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-1" variants={fadeUp}>
                  <div className="flex items-center gap-3">
                    <h3 className="font-sans text-lg font-bold text-heading">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Working
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-muted whitespace-nowrap hidden sm:block">
                    {exp.period}
                  </span>
                </motion.div>

                <motion.div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4" variants={fadeUp}>
                  <p className="text-body font-medium">{exp.role}</p>
                  <span className="text-sm text-muted sm:hidden block">{exp.period}</span>
                  <span className="text-sm text-muted hidden sm:block">{exp.location}</span>
                </motion.div>

                {/* Responsibilities */}
                <motion.ul className="space-y-2 mb-5" variants={fadeUp}>
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-body text-[15px] leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted before:font-bold list-none">
                      {item}
                    </li>
                  ))}
                </motion.ul>

                {/* Tech tags */}
                <motion.div className="flex flex-wrap gap-2" variants={fadeUp}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-muted px-2.5 py-1 rounded-lg border border-border bg-bg-subtle transition-colors duration-200 hover:border-heading/30 hover:text-heading cursor-default shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-20 pt-12 border-t border-border/60"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <motion.h2
            className="text-h2 mb-8"
            variants={fadeUp}
          >
            Education
          </motion.h2>

          <motion.div variants={fadeUp}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="font-sans text-lg font-bold text-heading">
                {education.institution}
              </h3>
              <span className="text-sm text-muted whitespace-nowrap">
                {education.period}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <p className="text-body font-medium">{education.degree}</p>
              <span className="text-sm text-muted">{education.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;