import React from 'react';
import { FaHtml5 } from 'react-icons/fa';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex justify-center'>
              <FaHtml5 className='text-4xl text-orange-500 mb-2' />
            </div>
            <p className='my-4 font-semibold text-lg'>HTML</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>CSS</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>JavaScript</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>React</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>Python</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>MySQL</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>GitHub/Git</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>Canva</p>
          </div>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-110 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <p className='my-4 font-semibold text-lg'>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills; 