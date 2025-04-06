import React from 'react';

const Experience = () => {
  return (
    <div name='experience' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Tech Community Engagement</p>
          <p className='py-4'>My contributions to the tech community</p>
        </div>

        <div className='w-full grid grid-cols-1 gap-4 py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>Open Source Contributor</h3>
            <p className='py-2'>GSoC</p>
            <p className='text-sm'>2023</p>
            <ul className='list-disc list-inside text-sm mt-2'>
              <li>Fixed bugs and implemented new features</li>
              <li>Reviewed pull requests and provided constructive feedback</li>
              <li>Documented code and improved project documentation</li>
            </ul>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>CO-Organizer</h3>
            <p className='py-2'>GDG OC JKIAPT</p>
            <p className='text-sm'>2024-2025</p>
            <ul className='list-disc list-inside text-sm mt-2'>
              <li>Organized and hosted monthly tech meetups</li>
              <li>Invited industry experts for talks and workshops</li>
              <li>Created networking opportunities for local developers</li>
              <li>Facilitated knowledge sharing sessions</li>
            </ul>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>EVENT VOLUNTEER</h3>
            <p className='py-2'>GDSC JKIAPT</p>
            <p className='text-sm'>2023-2024</p>
            <ul className='list-disc list-inside text-sm mt-2'>
              <li>Served as an Event Volunteer at GDSC, supporting the planning and execution of tech events and workshops.</li>
              <li>Assisted in managing logistics, participant engagement, and smooth event flow.</li>
              <li>Gained teamwork, communication, and event coordination experience in a tech community.</li>
            </ul>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>ATENDEE</h3>
            <p className='py-2'>Perspektywy Women In Tech Summit </p>
            <ul className='list-disc list-inside text-sm mt-2'>
              <li>Attended Perspektywy Women in Tech Summit, one of the largest tech events for women in Europe</li>
              <li>Gained insights from global tech leaders and innovators across various industries.</li>
              <li>Networked with professionals, explored career opportunities, and attended impactful workshops.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience; 