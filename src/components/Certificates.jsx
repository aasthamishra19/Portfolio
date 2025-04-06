import React from 'react';

const Certificates = () => {
  return (
    <div name='certificates' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certificates</p>
          <p className='py-4'>Here are my certifications and achievements</p>
        </div>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>SheCodes</h3>
            <p className='py-2'>Certicficate Of Completition</p>
            <p className='text-sm'>Completed comprehensive full-stack web development course covering HTML, CSS, JavaScript, React.</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>Build Your Own AI Tool</h3>
            <p className='py-2'>Certicficate Of Participation </p>
            <p className='text-sm'>"Gain hands-on experience building your own AI models from scratch with real-world projects. This certificate showcases your practical AI development skills and innovation."</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>#Include her Cohort 2.0</h3>
            <p className='py-2'>Certicficate Of Participation</p>
            <p className='text-sm'>"Build your own AI  - with hands-on projects and real-world applications. This certificate highlights your practical AI skills and innovation."</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>Google Cloud Study Jam</h3>
            <p className='py-2'>Certificate Of Completion</p>
            <p className='text-sm'>Gaining hands-on experience with cloud computing tools and technologies. Earned a certificate showcasing practical skills in Google Cloud services."</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'>Google Solution Challenge</h3>
            <p className='py-2'>Certicficate Of Participation </p>
            <p className='text-sm'>"Participated in the **Google Solution Challenge – Hers Cohort**, building a tech solution aligned with UN Sustainable Development Goals. Gained hands-on experience in real-world problem-solving and collaborative development."</p>
          </div>
          
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'> Python and AI Bootcamp</h3>
            <p className='py-2'>Certicficate Of Participation and Completion </p>
            <p className='text-sm'>"Completed Python and AI Bootcamp – with hands-on projects and practical AI skills."</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4'>
            <h3 className='text-xl font-bold text-pink-600'> Hotstar clone using HTML, CSS and JavaScript Bootcamp</h3>
            <p className='py-2'>Certicficate Of Participation and Completion </p>
            <p className='text-sm'>"Completed Frontend Bootcamp – with hands-on projects and practical frontend skills."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates; 