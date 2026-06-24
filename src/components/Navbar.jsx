import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container-wide py-6 md:py-8">
      <nav className="flex items-center justify-between" aria-label="Main navigation">
        {/* Logo / Wordmark */}
        <a
          href="#"
          className="font-display text-xl md:text-2xl text-heading tracking-tight"
          id="nav-logo"
        >
          arpit verma
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body hover:text-heading transition-colors duration-200 link-underline"
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/pdf/Arpit_Resume__Main.pdf"
            download
            className="text-sm text-body hover:text-heading transition-colors duration-200 link-underline"
            id="nav-resume"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-heading"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          id="nav-mobile-toggle"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {isOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-6 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-body hover:text-heading transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/pdf/Arpit_Resume__Main.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="text-body hover:text-heading transition-colors duration-200 py-1"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;