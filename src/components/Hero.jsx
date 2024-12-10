import React from 'react'
import Profile from '../assets/Profile.jpg'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <motion.h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16'>
                    Muhammad Nadeem
                </motion.h1>
                <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl rounded-md'>FrontEnd and Odoo Developer</span>
                <p className='mt-3'>As a skilled frontend  and odoo developer,<p> I can customize a module from scratch and can make changes in existing module</p>. specialize in building responsive and user-friendly web interfaces with expertise in HTML, CSS, JavaScript, and modern frameworks like React. I am passionate about creating seamless user experiences and have a strong eye for design and detail, ensuring every project is visually engaging and functionally robust.</p>
            </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 '>
            <div className='flex justify-center'>
                <img className='h-64 lg:h-80 ml-20 mt-10 rounded-full' src={Profile} alt="M Nadeem" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero
