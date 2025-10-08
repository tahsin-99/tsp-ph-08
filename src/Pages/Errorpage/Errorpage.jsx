import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div className='text-center space-y-5 flex flex-col justify-center items-center min-h-screen'>
           
            <img className='mx-auto' src={error} alt="" />
           
           <div>
            <p className='text-4xl font-semibold'>Oops,page not found!</p>
            <p className='font-normal text-[20px]'>The page you are looking for is not available.</p>
           </div>
           <Link to='/'>
           <button className='mt-30 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold rounded-sm w-[150px] h-[48px] cursor-pointer'>Go Home</button>
           </Link>
        </div>
    );
};

export default Errorpage;