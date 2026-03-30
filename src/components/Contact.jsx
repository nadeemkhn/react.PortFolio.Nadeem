import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { contact } from '../constants';

const Contact = () => {
  return (
    <section id='contact' className='pb-20 pt-4'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='my-10 text-center text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='mx-auto max-w-md rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 flex flex-col gap-5'
      >
        <div className='flex items-center gap-4 text-neutral-400'>
          <FaMapMarkerAlt className='text-cyan-400 text-xl shrink-0' />
          <span>{contact.address}</span>
        </div>
        <div className='flex items-center gap-4 text-neutral-400'>
          <FaPhone className='text-cyan-400 text-xl shrink-0' />
          <a href={`tel:${contact.phoneNo.replace(/\s/g, '')}`} className='hover:text-cyan-400 transition-colors duration-200'>
            {contact.phoneNo}
          </a>
        </div>
        <div className='flex items-center gap-4 text-neutral-400'>
          <FaEnvelope className='text-cyan-400 text-xl shrink-0' />
          <a href={`mailto:${contact.email}`} className='text-blue-400 hover:text-blue-300 underline transition-colors duration-200 break-all'>
            {contact.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
