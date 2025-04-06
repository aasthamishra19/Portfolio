import React from 'react';

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-[#0a192f] py-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* Grid Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project Card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gradient-to-r from-[#0a192f] to-[#0f2c5c]'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                E-Commerce Platform
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/aasthamishra/ecommerce' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <p className='text-sm mt-2 px-4'>
                A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.
              </p>
            </div>
          </div>

          {/* Project Card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gradient-to-r from-[#0a192f] to-[#0f2c5c]'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Task Management App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/aasthamishra/taskmanager' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <p className='text-sm mt-2 px-4'>
                A task management application with user authentication, task creation, assignment, and progress tracking.
              </p>
            </div>
          </div>

          {/* Project Card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gradient-to-r from-[#0a192f] to-[#0f2c5c]'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Portfolio Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/aasthamishra/portfolio' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <p className='text-sm mt-2 px-4'>
                A responsive portfolio website built with React and Tailwind CSS to showcase my skills and projects.
              </p>
            </div>
          </div>

          {/* Project Card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gradient-to-r from-[#0a192f] to-[#0f2c5c]'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather Dashboard
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/aasthamishra/weather-app' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <p className='text-sm mt-2 px-4'>
                A weather dashboard that displays current weather and forecasts using a weather API.
              </p>
            </div>
          </div>

          {/* Project Card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gradient-to-r from-[#0a192f] to-[#0f2c5c]'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Blog Platform
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/aasthamishra/blog-platform' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <p className='text-sm mt-2 px-4'>
                A blog platform with user authentication, post creation, commenting, and search functionality.
              </p>
            </div>
          </div>

          {/* Project Card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-gradient-to-r from-[#0a192f] to-[#0f2c5c]'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Recipe Finder
              </span>
              <div className='pt-8 text-center'>
                <a href='https://github.com/aasthamishra/recipe-finder' target='_blank' rel='noopener noreferrer'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
              <p className='text-sm mt-2 px-4'>
                An application that allows users to search for recipes based on ingredients they have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work; 