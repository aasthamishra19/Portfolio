import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certificates = () => {
  return (
    <div name='certificates' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certificates</p>
          <p className='py-4'>Here are my certifications and achievements</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 py-8'>
          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaCertificate className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>SheCodes</h3>
            </div>
            <p className='text-gray-400 mt-2'>Certificate Of Completion</p>
            <p className='mt-4 text-gray-300'>
              Completed comprehensive full-stack web development course covering HTML, CSS, JavaScript, React.
            </p>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaCertificate className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>Build Your Own AI Tool</h3>
            </div>
            <p className='text-gray-400 mt-2'>Certificate Of Participation</p>
            <p className='mt-4 text-gray-300'>
              Gain hands-on experience building your own AI models from scratch with real-world projects. This certificate showcases your practical AI development skills and innovation.
            </p>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaCertificate className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>#Include her Cohort 2.0</h3>
            </div>
            <p className='text-gray-400 mt-2'>Certificate Of Participation</p>
            <p className='mt-4 text-gray-300'>
              Build your own AI - with hands-on projects and real-world applications. This certificate highlights your practical AI skills and innovation.
            </p>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaCertificate className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>Google Cloud Study Jam</h3>
            </div>
            <p className='text-gray-400 mt-2'>Certificate Of Completion</p>
            <p className='mt-4 text-gray-300'>
              Gaining hands-on experience with cloud computing tools and technologies. Earned a certificate showcasing practical skills in Google Cloud services.
            </p>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaCertificate className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>Google Solution Challenge</h3>
            </div>
            <p className='text-gray-400 mt-2'>Certificate Of Participation</p>
            <p className='mt-4 text-gray-300'>
              Participated in the Google Solution Challenge – Hers Cohort, building a tech solution aligned with UN Sustainable Development Goals. Gained hands-on experience in real-world problem-solving and collaborative development.
            </p>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaCertificate className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>Python and AI Bootcamp</h3>
            </div>
            <p className='text-gray-400 mt-2'>Certificate Of Participation and Completion</p>
            <p className='mt-4 text-gray-300'>
              Completed Python and AI Bootcamp – with hands-on projects and practical AI skills.
            </p>
          </div>

          <div className='shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 duration-500 p-4 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#112240] transform transition-all hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50'>
            <div className='flex items-center'>
              <FaCertificate className='text-2xl text-pink-500 mr-2' />
              <h3 className='text-xl font-bold text-pink-600'>Hotstar clone using HTML, CSS and JavaScript Bootcamp</h3>
            </div>
            <p className='text-gray-400 mt-2'>Certificate Of Participation and Completion</p>
            <p className='mt-4 text-gray-300'>
              Completed Frontend Bootcamp – with hands-on projects and practical frontend skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates; 