import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='mb-20 flex items-center justify-between py-6'
    >
      <div className='flex flex-shrink-0 items-center'>
        <span className='text-xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          MN
        </span>
      </div>
      <div className='flex items-center gap-5 text-2xl'>
        <a
          href='https://www.linkedin.com/in/muhammad-nadeem-905461235/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://github.com/nadeemkhn'
          target='_blank'
          rel='noopener noreferrer'
          className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'
        >
          <FaGithub />
        </a>
        <a
          href='https://x.com/NadimWaxir'
          target='_blank'
          rel='noopener noreferrer'
          className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'
        >
          <FaTwitterSquare />
        </a>
        <a
          href='https://www.instagram.com/nadeem_wazir/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'
        >
          <FaInstagram />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
