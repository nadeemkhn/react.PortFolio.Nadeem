import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { education } from '../constants/index';

const Education = () => {
  return (
    <section id='education' className='border-b border-neutral-800 py-20'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-14'
      >
        <h2 className='text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Education
        </h2>
      </motion.div>

      <div className='relative max-w-3xl mx-auto'>
        <div className='absolute left-5 top-0 bottom-0 w-px bg-neutral-800 hidden sm:block'></div>

        <div className='flex flex-col gap-10'>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex gap-6'
            >
              <div className='hidden sm:flex flex-col items-center'>
                <div className='w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shrink-0 z-10 shadow-lg shadow-pink-900/40'>
                  <FaGraduationCap className='text-white text-sm' />
                </div>
              </div>

              <div className='flex-1 rounded-xl border border-neutral-800 bg-neutral-900/50 p-6'>
                <div className='flex flex-wrap items-start justify-between gap-2'>
                  <div>
                    <h3 className='text-lg font-semibold text-white'>{edu.degree}</h3>
                    <p className='text-cyan-400 text-sm mt-0.5'>{edu.institution}</p>
                  </div>
                  <span className='text-xs text-neutral-500 border border-neutral-700 rounded-full px-3 py-1'>
                    {edu.period}
                  </span>
                </div>
                <p className='mt-3 text-sm text-neutral-400 leading-relaxed'>{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
