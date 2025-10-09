import React, { Suspense } from 'react';
import Homeapp from '../Homeapp/Homeapp';
import { Link } from 'react-router';

const Homeapps = ({ data }) => {


    return (
        <div className=' sm:w-[1440px] h-full   mx-auto mt-3'>
            <div className='text-center space-y-5 mt-5'>
                <h1 className='font-bold text-5xl'>Trending Apps</h1>
                <p className='text-[#627382] text-[20px] font-normal'>Explore All Trending Apps on the Market developed by us</p>

            </div>

            <Suspense fallback={<span>Loading....</span>}>
                <div className='grid sm:grid-cols-4 grid-cols-1 p-4  gap-4'>
                    {
                        data.map((app) => <Homeapp key={app.id} app={app}></Homeapp>)
                    }
                </div>
                <div className='text-center'>
                    <Link to='/apps'>
                        <button className='w-[145px] h-[48px] rounded-sm  bg-linear-to-r from-[#632EE3] to-[#9F62F2] mt-5 text-white cursor-pointer transform transition-transform duration-150  hover:-translate-y-1 active:scale-95'>Show All Apps</button></Link>
                </div>
            </Suspense>
        </div>
    );
};

export default Homeapps;