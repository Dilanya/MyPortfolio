import React from 'react'
import { motion } from 'framer-motion';
import {styles} from '../styles';
import {StarsCanvas} from './canvas';
import { Link } from 'react-router-dom';
import {navLinks} from '../constants';

const Hero = () => {

  
  
  return (
    <section className='relative w-full h-screen mx-auto '>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      <div className="flex justify-center items-center h-screen mx-4 md:mx-0">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className={`${styles.heroHeadText}  md:text-6xl font-bold text-white leading-tight`}>
            Hi, I'm <span className="text-[#915eff]">Dilanya</span>
          </h1>
          <p className={`${styles.heroSubText}text-lg md:text-2xl text-white-100 mt-2 md:mt-4`}>
            I develop Web Applications, Mobile Applications, 
            <br/> and I am an AI/ML enthusiast 
          </p>
          <div class="mt-8 flex justify-center space-x-4">
            <a href="src\assets\resume.pdf" download>
              <button class="bg-transparent hover:bg-white-100 text-white-700 font-semibold hover:text-black py-2 px-6 border border-blue-500 hover:border-transparent rounded">
                Download Resume
              </button>
            </a>
          </div>

          <div className=" left-0 right-0 flex justify-center items-center mt-8">
        <div className="flex space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              <i className="fab fa-github"></i>
            </button>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <i className="fab fa-linkedin"></i>
            </button>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <i className="fab fa-youtube"></i>
            </button>
          </a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
            <button className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
              <i className="fab fa-medium"></i>
            </button>
          </a>
        </div>
      </div>
        </div>

        
      </div>

      
      </div>

      

      <StarsCanvas/>

      
    </section>
  )
}

export default Hero;
