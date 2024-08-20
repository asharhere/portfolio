import React from 'react'
import myImage from '../assets/image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-20' id='home'>
        <img src={myImage} alt="" 
        className='mx-auto mt-8 bg-white mb-8 w-48 h-48 rounded-full object-contain transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ashar Azeem Ali</span>
            , Front-End Developer
        </h1>
        <p className='mt-3 text-lg text-gray-300'>
              I am a passionate Front-End developer with a focus on building <br />
              modern and responsive web applications. With a strong foundation <br />
              in frontend technologies, I strive to create <br />
              seamless and efficient user experiences.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
        </div>

    </div>
  )
}

export default Hero