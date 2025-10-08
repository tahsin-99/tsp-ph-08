import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import search from '../../assets/search.png'
import App from '../App/App';





const Apps = () => {

    const data =useLoaderData()
    const [find,setFind]=useState('')
    
  
            const filterApps =data.filter(item=>item.title.toLowerCase().includes(find.toLowerCase()))

            
    

    
    return (
       <>
        <div className='text-center mt-5 space-y-4'>
         <p className='font-bold text-5xl'>Our All Applications</p>
         <p className='font-normal text-[20px] text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        <div className='flex justify-between items-center p-5 w-[1440px] mx-auto'>
            <div>
                <p className='font-semibold text-2xl'>({filterApps.length})Apps Found</p>
            </div>
            <div>
               
                <input onChange={(e)=>setFind(e.target.value)} className='border-1 border-gray-200 w-[400px] h-[44px] bg-no-repeat bg-left  bg-[length:16px_16px] pl-8 ' style={{backgroundImage:`url(${search})`, backgroundPosition:'10px'}} type="search" name="" id="" placeholder= 'Search Apps' />
            </div>

            
        </div>

        <div className='w-[1440px] h-auto  mx-auto p-5'>
          {
            filterApps.length>0?(
                  <div className='grid grid-cols-4 gap-5'>
                {
                    filterApps.map((allApp)=><App key={allApp.id} allApp={allApp} ></App>)
                }
            </div>
            ):(
                <>
              <div className='text-center mt-5'>
                  <p className='text-center text-4xl font-semibold'>No apps found</p>
                
               
             <button onClick={()=>setFind('')} className='w-[145px]  h-[48px] rounded-sm  bg-linear-to-r from-[#632EE3] to-[#9F62F2] mt-10 text-white cursor-pointer '>Show All Apps</button>
           
              </div>
                </>
                
            )
          }

        </div>
       </>
        
    );
};

export default Apps;