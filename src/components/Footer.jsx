import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-border/60 dark:border-dark-border/60 bg-bg/50 dark:bg-dark-bg/50 mt-12 pt-16 pb-12">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Left Column - Brand & Socials */}
          <div className="max-w-sm">
            <h3 className="font-sans text-xl font-bold text-heading dark:text-dark-heading mb-3">Arpit Verma</h3>
            <p className="text-body dark:text-dark-body text-sm leading-relaxed mb-6">
              Software Engineer building clean, scalable backend systems and robust APIs.
            </p>
            <div className="flex items-center gap-5">
              <a href="mailto:contact@arpitverma.me" className="text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors" aria-label="Email">
                <Mail size={18} strokeWidth={1.5} />
              </a>
              <a href="https://linkedin.com/in/arpit-verma-545819226" target="_blank" rel="noopener noreferrer" className="text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://github.com/arpitboss" target="_blank" rel="noopener noreferrer" className="text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors" aria-label="GitHub">
                <FaGithub size={18} />
              </a>
              <a href="https://x.com/ArpitVerma_123" target="_blank" rel="noopener noreferrer" className="text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors" aria-label="Twitter">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex gap-16 sm:gap-24 md:text-right">
            <div className="text-left">
              <h4 className="font-sans font-bold text-heading dark:text-dark-heading text-sm mb-5">General</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">Home</a></li>
                <li><a href="#about" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">About</a></li>
                <li><a href="#experience" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">Experience</a></li>
                <li><a href="#projects" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">Projects</a></li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="font-sans font-bold text-heading dark:text-dark-heading text-sm mb-5">Connect</h4>
              <ul className="space-y-3">
                <li><a href="mailto:contact@arpitverma.me" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">Email</a></li>
                <li><a href="https://linkedin.com/in/arpit-verma-545819226" target="_blank" rel="noopener noreferrer" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/arpitboss" target="_blank" rel="noopener noreferrer" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">GitHub</a></li>
                <li><a href="https://x.com/ArpitVerma_123" target="_blank" rel="noopener noreferrer" className="text-sm text-muted dark:text-dark-muted hover:text-heading dark:hover:text-dark-heading transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 pb-4 border-t border-border/40 dark:border-dark-border/40 flex flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-4 relative">
          <p className="text-xs text-muted dark:text-dark-muted w-full sm:w-auto text-center sm:text-left">
            Copyright © {new Date().getFullYear()} Arpit Verma. All rights reserved.
          </p>
          <div className="relative pr-2">
            <p className="font-handwrite text-xl md:text-2xl text-muted/80 dark:text-dark-muted/80 -rotate-3">
              Thanks for visiting ✦
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;