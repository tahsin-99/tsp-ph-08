import React from 'react';
import { useLoaderData } from 'react-router';
import search from '../../assets/search.png'
import App from '../App/App';

const Apps = () => {
    const data =useLoaderData()
    return (
       <>
        <div className='text-center mt-5 space-y-4'>
         <p className='font-bold text-5xl'>Our All Applications</p>
         <p className='font-normal text-[20px] text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className='flex justify-between items-center p-5 w-[1440px] mx-auto'>
            <div>
                <p className='font-semibold text-2xl'>({data.length})Apps Found</p>
            </div>
            <div>
               
                <input className='border-1 border-gray-200 w-[400px] h-[44px] bg-no-repeat bg-left  bg-[length:16px_16px] pl-8 ' style={{backgroundImage:`url(${search})`, backgroundPosition:'10px'}} type="search" name="" id="" placeholder= 'Search Apps' />
            </div>

            
        </div>

        <div className='w-[1440px] h-auto  mx-auto p-5'>
            <div className='grid grid-cols-4 gap-5'>
                {
                    data.map((allApp)=><App key={allApp.id} allApp={allApp} ></App>)
                }
            </div>

        </div>
       </>
        
    );
};

export default Apps;