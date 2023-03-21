import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import {navLinks} from '../constants';
import {  menu, close} from '../assets';
import  logo from "../Assets/myLogo.svg";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav
    className={`${styles.paddingX} w-full flex 
    items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between 
      items-center max-w-7xl mx-auto'>
        <Link
        to="/"
        className="flex items-center gap-2"
        onclick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className='w-100 h-16 object-contain'/>
        </Link>
        <ul className='list-none hidden sm:flex
        flex-row gap-10'>
          {navLinks.map((Link) =>(
            <li
              key={Link.id}
              className={`${
                active === Link.title
                  ? "text-white"
                  :"text-secondary"
              }`}
            
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}

        </ul>
      </div>
    </nav>
  )
}

export default Navbar