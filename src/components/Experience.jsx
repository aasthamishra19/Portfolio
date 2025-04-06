import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
          <p className='py-4'>Check out my work experience</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaBriefcase className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>CO-ORGANIZER</h3>
            </div>
            <p className='text-gray-400 mt-2'>GDG OC JKIAPT | 2024 - Present</p>
            <ul className='list-disc list-inside mt-4 text-gray-300'>
              <li>Leading a community of 200+ tech enthusiasts</li>
              <li>Organizing workshops and tech talks</li>
              <li>Mentoring junior developers</li>
              <li>Collaborating with industry professionals</li>
            </ul>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaBriefcase className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>EVENT MANAGEMENT VOLUNTEER</h3>
            </div>
            <p className='text-gray-400 mt-2'>GDSC JKIAPT | 2023 - 2024</p>
            <ul className='list-disc list-inside mt-4 text-gray-300'>
              <li>Managed local chapter of 150+ members</li>
              <li>Organized coding workshops and hackathons</li>
              <li>Facilitated networking events</li>
              <li>Created educational content</li>
            </ul>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaBriefcase className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>GSoC</h3>
            </div>
            <p className='text-gray-400 mt-2'>OPEN SOURCE CONTRIBUTOR</p>
            <ul className='list-disc list-inside mt-4 text-gray-300'>
              <li>Contributed to multiple open source projects</li>
              <li>Fixed bugs and implemented new features</li>
              <li>Reviewed pull requests</li>
            </ul>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaBriefcase className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>PERSKEYYWY WOMEN IN TECH SUMMIT</h3>
            </div>
            <p className='text-gray-400 mt-2'>ATTENDEE</p>
            <ul className='list-disc list-inside mt-4 text-gray-300'>
              <li>Attended the summit to network with industry professionals and learn about the latest trends in technology</li>
              <li>Participated in workshops and panel discussions</li>
              <li>Got to know about the latest trends in technology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 