import { motion } from 'framer-motion';
import {
  FaShoppingCart, FaGlobe, FaDesktop, FaChartBar,
  FaFileAlt, FaPlug, FaCubes, FaStore, FaDatabase,
} from 'react-icons/fa';
import { services } from '../constants/index';

const serviceIcons = [
  <FaShoppingCart />,
  <FaGlobe />,
  <FaDesktop />,
  <FaChartBar />,
  <FaFileAlt />,
  <FaPlug />,
  <FaCubes />,
  <FaStore />,
  <FaDatabase />,
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Services = () => {
  return (
    <section id='services' className='border-b border-neutral-800 py-20'>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-4'
      >
        <h2 className='text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
          Services &amp; Solutions
        </h2>
        <p className='mt-3 text-neutral-400 text-sm max-w-2xl mx-auto'>
          Comprehensive Odoo development services tailored to your business needs. From
          customization to integration, I deliver scalable solutions across all Odoo versions.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`rounded-xl border bg-gradient-to-b ${service.gradient} ${service.border} p-6 flex flex-col gap-3 transition-transform duration-200`}
          >
            <div className={`text-3xl ${service.iconColor}`}>
              {serviceIcons[index]}
            </div>
            <h3 className='text-base font-semibold text-white'>{service.title}</h3>
            <p className='text-sm text-neutral-400 leading-relaxed'>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;
