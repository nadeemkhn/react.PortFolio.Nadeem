import React from 'react'
import { Projects } from '../constants/index'

const Project = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>
            Projects
        </h1>
        <div>
            {Projects.map((project,index)=>(
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className='w-full max-w-xl lg:3/4'>
                    <h6 className='mb-4 text-neutral-400'>{project.Title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.Description}</p>
                    <p className='mb-4 text-neutral-400'>{project.Technologies}</p>

                    </div>




                </div>
            ))}
        </div>



    </div>
  )
}

export default Project