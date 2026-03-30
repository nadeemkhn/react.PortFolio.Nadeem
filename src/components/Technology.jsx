import { motion } from 'framer-motion';
import { FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { RiTailwindCssLine, RiJavascriptLine, RiReactjsLine } from 'react-icons/ri';
import { DiMongodb, DiPostgresql } from 'react-icons/di';
import { SiOdoo } from 'react-icons/si';

const icons = [
  { Icon: SiOdoo, label: 'Odoo' },
  { Icon: FaHtml5, label: 'HTML5' },
  { Icon: FaCss3, label: 'CSS3' },
  { Icon: FaBootstrap, label: 'Bootstrap' },
  { Icon: RiTailwindCssLine, label: 'Tailwind' },
  { Icon: RiJavascriptLine, label: 'JavaScript' },
  { Icon: RiReactjsLine, label: 'React' },
  { Icon: DiPostgresql, label: 'PostgreSQL' },
  { Icon: DiMongodb, label: 'MongoDB' },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Technology = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>

      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='flex flex-wrap items-center justify-center gap-6'
      >
        {icons.map(({ Icon, label }) => (
          <motion.div
            key={label}
            variants={item}
            whileHover={{ scale: 1.15, borderColor: '#22d3ee' }}
            className='flex flex-col items-center gap-2 rounded-2xl border-4 border-neutral-800 p-4 cursor-default transition-colors duration-200'
          >
            <Icon className='text-7xl text-cyan-400' />
            <span className='text-xs text-neutral-400'>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technology;
