import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Aastha, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
              I've been constantly learning and evolving ever since.
            </p>
            <p className='mt-4'>
              I specialize in building responsive, user-friendly web applications using modern technologies like React, Node.js, and Python 
              I'm particularly interested in creating intuitive user experiences and optimizing application performance.
            </p>
            <p className='mt-4'>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects.
              I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            <p className='mt-4'>
              I'm always open to new opportunities and collaborations. If you have a project in mind or just want to chat about technology, 
              feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 