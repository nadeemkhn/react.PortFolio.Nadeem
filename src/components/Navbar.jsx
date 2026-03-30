import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md'
    >
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>

        {/* Logo */}
        <a href='#home' className='text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          MN
        </a>

        {/* Desktop nav links */}
        <nav className='hidden md:flex items-center gap-6'>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-sm text-neutral-400 hover:text-white transition-colors duration-200'
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className='hidden md:flex items-center gap-4 text-xl'>
          <a href='https://www.linkedin.com/in/muhammad-nadeem-905461235/' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaLinkedin /></a>
          <a href='https://github.com/nadeemkhn' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaGithub /></a>
          <a href='https://x.com/NadimWaxir' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaTwitterSquare /></a>
          <a href='https://www.instagram.com/nadeem_wazir/' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaInstagram /></a>
        </div>

        {/* Mobile hamburger */}
        <button
          className='md:hidden text-neutral-400 hover:text-white text-2xl'
          onClick={() => setOpen(!open)}
          aria-label='Toggle menu'
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='md:hidden border-t border-neutral-800 bg-neutral-950 px-6 pb-6 overflow-hidden'
          >
            <nav className='flex flex-col gap-4 pt-4'>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className='text-neutral-400 hover:text-white transition-colors duration-200'
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className='flex items-center gap-4 text-xl mt-4'>
              <a href='https://www.linkedin.com/in/muhammad-nadeem-905461235/' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaLinkedin /></a>
              <a href='https://github.com/nadeemkhn' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaGithub /></a>
              <a href='https://x.com/NadimWaxir' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaTwitterSquare /></a>
              <a href='https://www.instagram.com/nadeem_wazir/' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'><FaInstagram /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
