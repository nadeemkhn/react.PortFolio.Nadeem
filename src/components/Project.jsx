import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Projects } from '../constants/index';

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-12'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='my-20 text-center text-4xl'
      >
        Projects
      </motion.h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {Projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: 'easeOut' }}
            className='rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 flex flex-col hover:border-neutral-600 transition-colors duration-300'
          >
            {/* Title row */}
            <div className='flex items-start justify-between gap-3 flex-wrap'>
              <h3 className='text-base sm:text-lg font-semibold text-white leading-snug'>
                {project.Title}
              </h3>
              {project.Link && (
                <a
                  href={project.Link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200 shrink-0'
                >
                  <FaExternalLinkAlt className='text-xs' />
                  Visit Site
                </a>
              )}
            </div>

            {/* Description */}
            <p className='mt-3 text-neutral-400 text-sm leading-relaxed'>
              {project.Description}
            </p>

            {/* Highlights */}
            {project.Highlights && (
              <ul className='mt-3 space-y-1 flex-1'>
                {project.Highlights.map((h, i) => (
                  <li key={i} className='flex items-start gap-2 text-sm text-neutral-400'>
                    <span className='text-cyan-400 mt-0.5 shrink-0'>•</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech badges */}
            <div className='mt-4 flex flex-wrap gap-2'>
              {project.Technologies.map((tech, i) => (
                <span
                  key={i}
                  className='rounded-full border border-neutral-700 bg-neutral-800 px-3 py-1 text-xs text-cyan-400'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
