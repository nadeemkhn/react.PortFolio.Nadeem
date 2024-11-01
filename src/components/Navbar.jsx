import React from 'react';
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
          {/* You can add your logo or brand name here */}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href="https://www.linkedin.com/in/muhammad-nadeem-905461235/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nadeemkhn" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/NadimWaxir" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare />
          </a>
          <a href="https://www.instagram.com/nadeem_wazir/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
