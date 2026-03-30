import Profile from '../assets/Profile.jpg';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
});

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
                <span className='inline-block rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-5 py-2 text-base sm:text-lg font-semibold text-white shadow-lg'>
                  Odoo Developer &amp; Frontend Specialist
                </span>
              </motion.div>

              <motion.p
                {...fadeLeft(0.3)}
                className='mt-6 max-w-xl text-neutral-400 leading-relaxed text-sm sm:text-base'
              >
                I am an Odoo developer with strong expertise in Python and advanced skills in
                customizing and extending Odoo modules. I specialize in Point of Sale (POS)
                customization, Portal customization, Website customization, QWeb report
                development, and comprehensive integration solutions.
              </motion.p>

              <motion.p
                {...fadeLeft(0.4)}
                className='mt-3 max-w-xl text-neutral-400 leading-relaxed text-sm sm:text-base'
              >
                Proficient in front-end technologies like HTML, CSS, JavaScript, TailwindCSS,
                React.js and Bootstrap, I create responsive, user-friendly interfaces. I also
                deliver scalable, clean, and efficient ERP solutions tailored to business needs.
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
                  <span>Johar Town, Lahore, Pakistan</span>
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
              <div className='absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-25 scale-110'></div>
              <img
                src={Profile}
                alt='Muhammad Nadeem'
                className='relative h-64 w-64 sm:h-80 sm:w-80 rounded-full object-cover border-4 border-neutral-800 shadow-2xl'
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
