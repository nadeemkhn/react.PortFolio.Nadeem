import { useState, useEffect, useRef } from 'react';
import Profile from '../assets/Profile.jpg';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const stats = [
  { to: 15, suffix: '+', label: 'Projects' },
  { to: 4, suffix: '+', label: 'Years Exp.' },
  { to: 8, suffix: '+', label: 'Integrations' },
  { to: 3, suffix: '', label: 'Mobile Apps' },
];

const Counter = ({ to, suffix = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

const roles = [
  'Odoo Developer',
  'Flutter Developer',
  'ERP Integration Expert',
  'Full-Stack Developer',
];

const RotatingRole = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className='relative inline-flex h-[1.6em] items-center overflow-hidden leading-none'>
      <AnimatePresence mode='wait'>
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='block whitespace-nowrap'
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  return (
    <section id='home' className='min-h-screen flex items-center border-b border-neutral-900 pt-20'>
      <div className='w-full'>
        <div className='flex flex-wrap items-center gap-y-10'>

          {/* Left – text */}
          <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>

              <motion.h1
                {...fadeLeft(0)}
                className='text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent pb-2'
              >
                Muhammad Nadeem
              </motion.h1>

              <motion.div {...fadeLeft(0.15)} className='mt-4'>
                <span className='inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-2 text-base sm:text-lg font-semibold text-white shadow-lg'>
                  <RotatingRole />
                </span>
              </motion.div>

              <motion.p
                {...fadeLeft(0.3)}
                className='mt-6 max-w-xl text-neutral-400 leading-relaxed text-sm sm:text-base'
              >
                I am an Odoo developer with 4+ years of experience and strong Python expertise in
                customizing and extending Odoo across Sales, Purchase, Inventory, Accounting, POS,
                and HR. I specialize in Point of Sale (POS) customization, Portal and Website
                customization, QWeb report development, and end-to-end third-party integrations.
              </motion.p>

              <motion.p
                {...fadeLeft(0.4)}
                className='mt-3 max-w-xl text-neutral-400 leading-relaxed text-sm sm:text-base'
              >
                I also build cross-platform mobile apps with Flutter — from Odoo-connected
                business apps to delivery and chat solutions — and craft responsive interfaces
                with React.js, TailwindCSS, and Bootstrap. From AI-assisted document automation
                and OCR to real-time marketplace sync with Shopify, Walmart, and Zoho, I deliver
                scalable, clean, and efficient solutions tailored to business needs.
              </motion.p>

              {/* Contact info */}
              <motion.div {...fadeLeft(0.5)} className='mt-6 flex flex-col gap-2.5 text-sm text-neutral-400'>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                  <FaEnvelope className='text-cyan-400 shrink-0' />
                  <a href='mailto:nadeemwazir0123@gmail.com' className='hover:text-cyan-400 transition-colors duration-200'>
                    nadeemwazir0123@gmail.com
                  </a>
                </div>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                  <FaPhone className='text-cyan-400 shrink-0' />
                  <a href='tel:+923059290390' className='hover:text-cyan-400 transition-colors duration-200'>
                    +92 305 9290390
                  </a>
                </div>
                <div className='flex items-center gap-3 justify-center lg:justify-start'>
                  <FaMapMarkerAlt className='text-cyan-400 shrink-0' />
                  <span>Islamabad, Pakistan</span>
                </div>
              </motion.div>

              {/* Social icons */}
              <motion.div {...fadeLeft(0.6)} className='mt-5 flex items-center gap-4 text-2xl justify-center lg:justify-start'>
                <a href='https://www.linkedin.com/in/muhammad-nadeem-905461235/' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'>
                  <FaLinkedin />
                </a>
                <a href='https://github.com/nadeemkhn' target='_blank' rel='noopener noreferrer' className='text-neutral-400 hover:text-cyan-400 transition-colors duration-200'>
                  <FaGithub />
                </a>
              </motion.div>

              {/* CTA */}
              <motion.div {...fadeLeft(0.7)} className='mt-6 flex gap-4 justify-center lg:justify-start flex-wrap'>
                <a
                  href='#projects'
                  className='rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity duration-200'
                >
                  View Projects
                </a>
                <a
                  href='mailto:nadeemwazir0123@gmail.com'
                  className='rounded-full border border-neutral-700 px-6 py-2.5 text-sm font-semibold text-neutral-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200'
                >
                  Contact Me
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                {...fadeLeft(0.8)}
                className='mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg'
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4 }}
                    className='rounded-xl border border-neutral-800 bg-neutral-900/50 px-3 py-3 text-center'
                  >
                    <div className='text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                      <Counter to={s.to} suffix={s.suffix} />
                    </div>
                    <div className='mt-1 text-xs text-neutral-400'>{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>

            </div>
          </div>

          {/* Right – image */}
          <div className='w-full lg:w-1/2 flex justify-center'>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className='relative'
            >
              {/* Floating wrapper */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className='relative'
              >
                {/* Rotating gradient glow */}
                <motion.div
                  aria-hidden
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className='absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,rgba(99,102,241,0.5),rgba(168,85,247,0.5),rgba(236,72,153,0.5),rgba(99,102,241,0.5))] blur-md opacity-70'
                />
                <div className='absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-25 scale-110'></div>
                <img
                  src={Profile}
                  alt='Muhammad Nadeem'
                  className='relative h-64 w-64 sm:h-80 sm:w-80 rounded-full object-cover object-[50%_22%] border-4 border-neutral-900 shadow-2xl'
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
