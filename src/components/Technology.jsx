import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from 'react-icons/fa';
import { RiTailwindCssLine, RiJavascriptLine } from 'react-icons/ri';
import { DiMongodb, DiPostgresql, DiPython } from 'react-icons/di';
import { SiOdoo, SiGit } from 'react-icons/si';
import { skillCategories } from '../constants/index';

// Map skill name → icon component
const iconMap = {
  'Odoo ERP': <SiOdoo className='text-5xl text-cyan-400' />,
  'Python': <DiPython className='text-5xl text-cyan-400' />,
  'OOP': <span className='text-2xl font-bold text-cyan-400'>OOP</span>,
  'Owl JS': <RiJavascriptLine className='text-5xl text-cyan-400' />,
  'QWeb': <span className='text-xl font-bold text-cyan-400'>QWeb</span>,
  'XML': <span className='text-xl font-bold text-cyan-400'>XML</span>,
  'HTML5': <FaHtml5 className='text-5xl text-purple-400' />,
  'CSS3': <FaCss3Alt className='text-5xl text-purple-400' />,
  'JavaScript': <RiJavascriptLine className='text-5xl text-purple-400' />,
  'React.js': <FaReact className='text-5xl text-purple-400' />,
  'Bootstrap': <FaBootstrap className='text-5xl text-purple-400' />,
  'Tailwind CSS': <RiTailwindCssLine className='text-5xl text-purple-400' />,
  'PostgreSQL': <DiPostgresql className='text-5xl text-pink-400' />,
  'MongoDB': <DiMongodb className='text-5xl text-pink-400' />,
  'REST API': <span className='text-lg font-bold text-pink-400'>REST</span>,
  'Webhooks': <span className='text-lg font-bold text-pink-400'>Hook</span>,
  'JSON': <span className='text-lg font-bold text-pink-400'>JSON</span>,
  'Git': <SiGit className='text-5xl text-pink-400' />,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const Technology = () => {
  return (
    <section id='skills' className='border-b border-neutral-800 py-20'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-14'
      >
        <h2 className='text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Skills &amp; Technologies
        </h2>
        <p className='mt-3 text-neutral-400 text-sm max-w-xl mx-auto'>
          Comprehensive expertise across Odoo development, frontend technologies, and data integration.
        </p>
      </motion.div>

      <div className='flex flex-col gap-12'>
        {skillCategories.map((cat, ci) => (
          <div key={ci}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-center text-lg font-semibold text-white mb-6'
            >
              {cat.category}
            </motion.h3>

            <motion.div
              variants={container}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
              className='flex flex-wrap justify-center gap-5'
            >
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className={`flex flex-col items-center gap-2 rounded-xl border bg-gradient-to-b ${cat.color} ${cat.border} p-5 w-28 cursor-default transition-colors duration-200`}
                >
                  <div className='h-12 flex items-center justify-center'>
                    {iconMap[skill] ?? <span className='text-sm font-semibold text-neutral-300'>{skill}</span>}
                  </div>
                  <span className='text-xs text-neutral-300 text-center leading-tight'>{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Technology;
