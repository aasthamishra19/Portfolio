import React from 'react';

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Education</p>
          <p className='py-4'>My academic journey</p>
        </div>

        <div className='w-full grid grid-cols-1 gap-4 py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>Bachelor of Technology </h3>
            <p className='py-2'>J.K INSTITUTE OF APPLIED PHYSCIS AND TECHNOLOGY, UNIVERSITY OF ALLAHABAD</p>
            <p className='text-sm'>2022-2026</p>
            <p className='text-sm mt-2'>CGPA: 8.0</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
              <h3 className='text-xl font-bold text-pink-600'>INTERMEDIATE</h3>
              <p className='py-2'>SANSKAAR INTERNATIONAL SCHOOL </p>
              <p className='text-sm'>2021-2022</p>
              <p className='text-sm mt-2'>PERCENTAGE: 84%</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
              <h3 className='text-xl font-bold text-pink-600'>HIGH SCHOOL</h3>
              <p className='py-2'>SANSKAAR INTERNATIONAL SCHOOL </p>
              <p className='text-sm'>2019-2020</p>
              <p className='text-sm mt-2'>PERCENTAGE: 90.2%</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 