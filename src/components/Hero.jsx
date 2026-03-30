import Profile from '../assets/Profile.jpg'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-12 lg:mb-20'>
      <div className='flex flex-wrap items-center'>

        {/* Text side */}
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>

            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className='pb-6 text-5xl sm:text-6xl font-thin tracking-tight lg:mt-16 text-center lg:text-left'
            >
              Muhammad Nadeem
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl sm:text-3xl font-semibold text-center lg:text-left'
            >
              FrontEnd &amp; Odoo Developer
            </motion.span>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className='mt-4 max-w-xl text-neutral-400 leading-relaxed text-center lg:text-left text-sm sm:text-base'
            >
              As a skilled Frontend and Odoo developer, I specialize in building responsive,
              user-friendly web interfaces using HTML, CSS, JavaScript, and React. I also
              customize Odoo modules from scratch and extend existing ones with Python,
              delivering seamless ERP solutions and visually engaging web experiences.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
              href='mailto:nadeemwazir0123@gmail.com'
              className='mt-6 inline-block rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300'
            >
              Hire Me
            </motion.a>

          </div>
        </div>

        {/* Image side */}
        <div className='w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0'>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className='flex justify-center'
          >
            <div className='relative'>
              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-30'></div>
              <img
                className='relative h-56 w-56 sm:h-72 sm:w-72 rounded-full object-cover border-4 border-neutral-800 shadow-2xl'
                src={Profile}
                alt='Muhammad Nadeem'
              />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Hero
