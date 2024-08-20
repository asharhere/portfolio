import React, { useEffect } from 'react';
import { useState } from 'react';

function Navbar() {
   const [sticky, setSticky] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => { 
       if (window.scrollY > 0) {
         setSticky(true);
       } else {
         setSticky(false);
       }
     };
 
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
  return (
    <>
    <nav className= { ` bg-black text-white max-w-screen-2xl container mx-auto md:px-20 fixed top-0 right-0 left-0 z-50 ${ 
        sticky ? "sticky-navbar shadow-md bg-base-300 duration-300 dark:bg-slate-600 dark:text-white transition-all ease-in-out" : ""
      }`}>
        <div className='container py-2 flex justify-center md:justify-between items-center '>
            <div className='text-2xl font-bold hidden md:inline'>Portfolio</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar