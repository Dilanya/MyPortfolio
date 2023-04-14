import React from 'react'
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {StarsCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> 
            Hi, I'm <span className='text-[#915eff]'>Dilanya</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop Web Applications, Mobile Applications <br className="sm:block hidden"/> 
              and I am an AI/ML enthusiast
            </p>
        </div>

      </div>
      <StarsCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 
      w-full flex justify-center items-center'>

        {/* New div element for buttons */}
        <div className="flex justify-center space-x-4">
          
          {/* Button to download resume */}
          <a href="src\assets\resume.pdf" download>
            <button className="bg-transparent hover:bg-white-100 text-white-700 font-semibold hover:text-black py-2 px-6 border border-blue-500 hover:border-transparent rounded">
              Resume
            </button>
          </a>
          
          {/* Button to contact */}
          <a href="mailto:dilanyasamarakoon@gmail.com">
            <button className="bg-transparent hover:bg-white-100 text-white-700 font-semibold hover:text-black py-2 px-6 border border-blue-500 hover:border-transparent rounded">
              Contact
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
