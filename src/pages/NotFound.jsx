import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='h-screen bg-[#282c34] flex flex-col justify-center items-center gap-10'>
      <img src='/images/NotFound.png' alt='' className='px-10' />
      <p className='text-4xl text-white w-5/6 text-center'>
        <span className='text-yellow-500'>Oops!</span> A wild
        <span className='font-bold '> Snorlax </span>
        has blocked your path!
      </p>
      <Link to={'/'}>
        <a className='w-full h-full rounded-xl font-bold text-white text-3xl bg-yellow-500 px-10 py-3 hover:bg-yellow-400 shadow-md shadow-slate-500'>
          Go back
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
